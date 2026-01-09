import { useLoginMutation } from "@/features/auth/api/authApi";

export function useLogin() {
  interface ILoginCredentials {
    email: string;
    password: string;
  }

  const [loginMutation, { isLoading, error }] = useLoginMutation();

  async function login(credentials: ILoginCredentials) {
    return await loginMutation(credentials).unwrap();
  }

  return { login, isLoading, error };
}
