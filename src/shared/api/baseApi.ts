import type { RootState } from "@/app/store/store";
import { logout, setCredentials } from "@/features/auth";
import { API_ROUTES } from "@/shared/config/routes/apiRoutes";
import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";

interface User {
  id: number;
  email: string;
}

interface RefreshResponse {
  user: User;
  accessToken: string;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

const BASE_URL = "https://easyfood-jwt.onrender.com/api/v1";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const mutex = new Mutex();

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();

  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        const refreshResult = await baseQuery(
          {
            url: API_ROUTES.auth.refresh,
            method: "POST",
          },
          api,
          extraOptions
        );

        if (refreshResult.data) {
          console.log("🔄 Refresh in baseQuery:", refreshResult.data);

          // Проверяем структуру ответа
          const isWrappedResponse = (
            data: unknown
          ): data is ApiResponse<RefreshResponse> => {
            return (
              typeof data === "object" &&
              data !== null &&
              "success" in data &&
              "data" in data
            );
          };

          const isDirectResponse = (data: unknown): data is RefreshResponse => {
            return (
              typeof data === "object" &&
              data !== null &&
              "user" in data &&
              "accessToken" in data
            );
          };

          if (isWrappedResponse(refreshResult.data)) {
            // Бэкенд вернул {success: true, data: {user, accessToken}}
            if (refreshResult.data.success && refreshResult.data.data) {
              api.dispatch(setCredentials(refreshResult.data.data));
              result = await baseQuery(args, api, extraOptions);
            } else {
              console.log("❌ Refresh failed, logging out");
              api.dispatch(logout());
            }
          } else if (isDirectResponse(refreshResult.data)) {
            // Уже трансформировано через transformResponse
            api.dispatch(setCredentials(refreshResult.data));
            result = await baseQuery(args, api, extraOptions);
          } else {
            console.log("❌ Unknown refresh response format, logging out");
            api.dispatch(logout());
          }
        } else {
          console.log("❌ Refresh failed, logging out");
          api.dispatch(logout());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Users", "Auth", "Dishes", "Default"],
  endpoints: () => ({}),
});

export { mutex };
