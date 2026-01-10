import type { AppDispatch } from "@/app/store/store";
import { useRefreshMutation } from "@/features/auth/api/authApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function AppInit() {
  const [refresh] = useRefreshMutation();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const init = async () => {
      try {
        await refresh(undefined).unwrap();
      } catch (error) {
        console.error("App initialization error:", error);
      }
    };
    init();
  }, [dispatch, refresh]);
}

export default AppInit;
