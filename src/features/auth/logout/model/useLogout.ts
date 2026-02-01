import { useLogoutMutation } from "@/features/auth/api/authApi";
import { useDispatch } from "react-redux";
import { logout as logoutAction } from "@/features/auth/api/model/authSlice";
import type { AppDispatch } from "@/app/store/store";

import { FRONT_ROUTES } from "@/shared/config/routes/frontRoutes";

export function useLogout() {
  const [logoutApi, { isLoading, error }] = useLogoutMutation();
  const dispatch = useDispatch<AppDispatch>();

  const logout = async () => {
    try {
      await logoutApi(undefined).unwrap();
    } catch (err) {
      console.warn(err);
    } finally {
      dispatch(logoutAction());
      window.location.href = FRONT_ROUTES.pages.Authentication.navigationPath;
    }
  };

  return { logout, isLoading, error };
}
