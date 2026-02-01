import type { AppDispatch, RootState } from "@/app/store/store";
import { logout } from "@/features/auth";
import { useRefreshMutation } from "@/features/auth/api/authApi";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function AppInit() {
  const [refresh] = useRefreshMutation();
  const dispatch = useDispatch<AppDispatch>();
  const initRef = useRef(false);

  const rehydrated = useSelector(
    (state: RootState) => state._persist?.rehydrated
  );

  useEffect(() => {
    if (!rehydrated) return;
    if (initRef.current) return;
    initRef.current = true;

    const init = async () => {
      const hasRefreshToken = document.cookie.includes("refreshToken=");
      if (!hasRefreshToken) {
        return;
      }

      try {
        await refresh(undefined).unwrap();
        console.log("✅ Token refreshed successfully");
      } catch (error) {
        console.log("⚠️ Refresh failed, clearing auth state", error);
        dispatch(logout());
      }
    };

    init();
  }, [rehydrated, refresh, dispatch]);

  return null;
}

export default AppInit;
