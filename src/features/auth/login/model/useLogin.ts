import { useLoginMutation } from "@/features/auth/api/authApi";

export function useLogin() {
  const [loginMutation, { isLoading, isError }] = useLoginMutation();

  async function login(credentials: string) {
    const result = await loginMutation(credentials);
    return result;
  }

  return { login, isLoading, isError };
}
