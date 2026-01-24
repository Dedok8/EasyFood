// import type { RootState } from "@/app/store/store";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const BASE_URL = "https://easyfood-jwt.onrender.com/api/v1/";

// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: BASE_URL,
//     credentials: "include",
//     prepareHeaders: (headers, { getState }) => {
//       const token = (getState() as RootState).auth.accessToken;
//       if (token) headers.set("authorization", `Bearer ${token}`);
//       return headers;
//     },
//   }),
//   tagTypes: ["Users", "Auth", "Orders", "Dishes", "Restorants"],
//   endpoints: () => ({}),
// });

import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "@/app/store/store";

import { API_ROUTES } from "@/shared/config/routes/apiRoutes";
import { FRONT_ROUTES } from "@/shared/config/routes/frontRoutes";
import { logout, setCredentials } from "@/features/auth/api/model/authSlice";
import { Mutex } from "async-mutex";

const BASE_URL = "https://easyfood-jwt.onrender.com/api/v1";

interface RefreshResponse {
  user: {
    id: string;
    email: string;
  };
  accessToken: string;
}

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, api) => {
    const state = api.getState() as RootState;
    const token = state.auth?.accessToken;

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
  await mutex.waitForUnlock(); // якщо хтось вже робить refresh, чекаємо

  const result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    if (!mutex.isLocked()) {
      return mutex.runExclusive(async () => {
        const refreshResult = await baseQuery(
          { url: API_ROUTES.auth.refresh, method: "POST" },
          api,
          extraOptions
        );
        if (refreshResult.data) {
          api.dispatch(setCredentials(refreshResult.data as RefreshResponse));
          return baseQuery(args, api, extraOptions); // повторний запит
        } else {
          api.dispatch(logout());
          window.location.href = FRONT_ROUTES.pages.Authentication
            .navigationPath as string;
          return result;
        }
      });
    } else {
      // інші запити чекають поки mutex розблокується і повторюють запит
      await mutex.waitForUnlock();
      return baseQuery(args, api, extraOptions);
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
