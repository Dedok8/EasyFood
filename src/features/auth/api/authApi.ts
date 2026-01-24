import { baseApi } from "@/shared/api/baseApi";
import { API_ROUTES } from "@/shared/config/routes/apiRoutes";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (credentials) => ({
        url: API_ROUTES.auth.login,
        method: "POST",
        body: credentials,
        credentials: "include",
      }),
    }),
    logout: build.mutation({
      query: () => ({
        url: API_ROUTES.auth.logout,
        method: "POST",
        credentials: "include",
      }),
    }),
    refresh: build.mutation({
      query: () => ({
        url: API_ROUTES.auth.refresh,
        method: "POST",
        credentials: "include",
      }),
    }),
    register: build.mutation({
      query: (data) => ({
        url: API_ROUTES.auth.register,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRefreshMutation,
  useRegisterMutation,
} = authApi;
