// authSlice.ts
import type { RootState } from "@/app/store/store";
import { authApi } from "@/features/auth/api/authApi";
import {
  createSlice,
  isAnyOf,
  type PayloadAction,
  type SerializedError,
} from "@reduxjs/toolkit";

interface IUser {
  id: string;
  email: string;
}

interface IAuthSlice {
  user: IUser | null;
  accessToken: string | null;
  loading: boolean;
  error: SerializedError | null;
}

const initialState: IAuthSlice = {
  user: null,
  accessToken: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials(
      state,
      action: PayloadAction<{ user: IUser; accessToken: string }>
    ) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.error = null;
      state.loading = false;
    },
    logout(state) {
      state.user = null;
      state.accessToken = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // pending
      .addMatcher(
        isAnyOf(
          authApi.endpoints.login.matchPending,
          authApi.endpoints.refresh.matchPending,
          authApi.endpoints.logout.matchPending
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      // fulfilled
      .addMatcher(
        isAnyOf(
          authApi.endpoints.login.matchFulfilled,
          authApi.endpoints.refresh.matchFulfilled
        ),
        (
          state,
          action: PayloadAction<{ user: IUser; accessToken: string }>
        ) => {
          state.user = action.payload.user;
          state.accessToken = action.payload.accessToken;
          state.loading = false;
          state.error = null;
        }
      )
      // rejected
      .addMatcher(
        isAnyOf(
          authApi.endpoints.login.matchRejected,
          authApi.endpoints.refresh.matchRejected,
          authApi.endpoints.logout.matchRejected
        ),
        (state, action) => {
          state.user = null;
          state.accessToken = null;
          state.loading = false;
          state.error = action.error ?? null;
        }
      )
      // logout fulfilled
      .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
        state.user = null;
        state.accessToken = null;
        state.loading = false;
        state.error = null;
      });
  },
});

export const { setCredentials, logout } = authSlice.actions;

export const selectAuthUser = (state: RootState) => state.auth.user;
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const selectAuthError = (state: RootState) => state.auth.error;

export default authSlice.reducer;
