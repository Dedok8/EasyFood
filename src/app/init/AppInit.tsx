import type { AppDispatch } from "@/app/store/store";
import { logout } from "@/features/auth";
import { useRefreshMutation } from "@/features/auth/api/authApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function AppInit() {
  const [refresh] = useRefreshMutation();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const init = async () => {
      const hasRefreshToken = document.cookie.includes("refreshToken=");
      if (!hasRefreshToken) return;

      try {
        await refresh(undefined).unwrap();
        console.log("✅ Token refreshed successfully");
      } catch (error) {
        console.log("⚠️ No valid refresh token, user needs to login", error);
        dispatch(logout());
      }
    };
    init();
  }, [dispatch, refresh]);
}

export default AppInit;
