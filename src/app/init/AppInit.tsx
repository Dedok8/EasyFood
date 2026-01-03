import { useRefreshMutation } from "@/features/auth/api/authApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function AppInit() {
  const [refresh] = useRefreshMutation();
  const dispatch = useDispatch();
  useEffect(() => {
    const init = async () => {
      await refresh({});
    };
    init();
  }, [refresh, dispatch]);
  return null;
}

export default AppInit;
