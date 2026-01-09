import { useLogoutMutation } from "@/features/auth/api/authApi";
import { useDispatch } from "react-redux";
import { logout as logoutAction } from "@/features/auth/api/model/authSlice";
import type { AppDispatch } from "@/app/store/store";

export function useLogout() {
  const [logoutApi, { isLoading, error }] = useLogoutMutation();
  const dispatch = useDispatch<AppDispatch>();

  const logout = async () => {
    try {
      await logoutApi(undefined).unwrap();
    } finally {
      dispatch(logoutAction());
    }
  };

  return { logout, isLoading, error };
}
