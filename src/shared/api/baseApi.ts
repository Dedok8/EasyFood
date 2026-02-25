import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

import { setCredentials, logout } from "@/features/auth/api/model/authSlice";
import { API_ROUTES } from "@/shared/config/routes/apiRoutes";

import { Mutex } from "async-mutex";
import type { IUser } from "@/features/auth/types/interfaces";
import type { RootState } from "@/app/store/types/storeTypes";

const BASE_URL = "https://easyfood-jwt.onrender.com/api/v1";

const mutex = new Mutex();

interface RefreshResponse {
  user: IUser;
  accessToken: string;
}

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

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();

  let result = await baseQuery(args, api, extraOptions);

  if (
    result.error?.status === 401 &&
    typeof args !== "string" &&
    args.url !== API_ROUTES.auth.refresh
  ) {
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
          const data = refreshResult.data as RefreshResponse;

          api.dispatch(
            setCredentials({
              user: data.user,
              accessToken: data.accessToken,
            })
          );

          result = await baseQuery(args, api, extraOptions);
        } else {
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

  tagTypes: ["Auth", "Users", "Restaurants", "Dishes", "Orders"],

  endpoints: () => ({}),
});
