import { useEffect, useRef } from "react";
import { useRefreshMutation } from "@/features/auth";

export function AppInit() {
  const [refresh] = useRefreshMutation();

  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    initialized.current = true;

    const init = async () => {
      try {
        await refresh().unwrap();
      } catch {
        //
      }
    };

    init();
  }, [refresh]);

  return null;
}
