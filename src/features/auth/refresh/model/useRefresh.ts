import { useRefreshMutation } from "@/features/auth/api/authApi";

export function useRefresh() {
  const [refreshApi, { isLoading, error }] = useRefreshMutation();

  const refresh = async () => {
    await refreshApi(undefined).unwrap();
  };

  return { refresh, isLoading, error };
}
