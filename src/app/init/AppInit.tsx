import { useEffect, useRef } from "react";
import { useRefreshMutation } from "@/features/auth/api/authApi";
import { useAppDispatch } from "@/shared/hooks/useSelector";
import { setCredentials } from "@/features/auth/api/model/authSlice";

export function AppInit() {
  const [refresh] = useRefreshMutation();
  const dispatch = useAppDispatch();
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const init = async () => {
      try {
        const data = await refresh().unwrap();
        dispatch(
          setCredentials({ user: data.user, accessToken: data.accessToken })
        );
      } catch {
        // не авторизован
      }
    };

    init();
  }, []);

  return null;
}
