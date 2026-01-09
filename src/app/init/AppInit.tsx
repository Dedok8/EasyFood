import type { AppDispatch } from "@/app/store/store";
import { useRefreshMutation } from "@/features/auth/api/authApi";
import { logout } from "@/features/auth/api/model/authSlice";
import { auth } from "@/shared/config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function AppInit() {
  const [refresh] = useRefreshMutation();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          await refresh(undefined).unwrap();
        } catch {
          dispatch(logout());
        }
      } else {
        dispatch(logout());
      }
    });
    return () => unsubscribe();
  }, [refresh, dispatch]);

  return null;
}

export default AppInit;
