import { baseApi } from "@/shared/api/baseApi";
import { API_ROUTES } from "@/shared/config/routes/apiRoutes";

interface User {
  id: number;
  email: string;
}

interface AuthResponse {
  user: User;
  accessToken: string;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<AuthResponse, { email: string; password: string }>({
      query: (credentials) => ({
        url: API_ROUTES.auth.login,
        method: "POST",
        body: credentials,
        credentials: "include",
      }),
      transformResponse: (response: ApiResponse<AuthResponse>) => {
        return response.data;
      },
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: API_ROUTES.auth.logout,
        method: "POST",
        credentials: "include",
      }),
    }),
    refresh: build.mutation<AuthResponse, void>({
      query: () => ({
        url: API_ROUTES.auth.refresh,
        method: "POST",
        credentials: "include",
      }),
      transformResponse: (response: ApiResponse<AuthResponse>) => {
        return response.data;
      },
    }),
    register: build.mutation<
      AuthResponse,
      { email: string; password: string; name?: string }
    >({
      query: (data) => ({
        url: API_ROUTES.auth.register,
        method: "POST",
        body: data,
      }),
      transformResponse: (response: ApiResponse<AuthResponse>) => {
        return response.data;
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRefreshMutation,
  useRegisterMutation,
} = authApi;
