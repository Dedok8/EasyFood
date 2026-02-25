import { useLoginMutation } from "@/features/auth/api/authApi";
import { setCredentials } from "@/features/auth/api/model/authSlice";
import { useAppDispatch } from "@/shared/hooks/useSelector";

interface ILoginCredentials {
  email: string;
  password: string;
}

export function useLogin() {
  const [loginMutation, { isLoading, error }] = useLoginMutation();
  const dispatch = useAppDispatch();

  async function login(credentials: ILoginCredentials) {
    const data = await loginMutation(credentials).unwrap();
    dispatch(
      setCredentials({ user: data.user, accessToken: data.accessToken })
    );
    return data;
  }

  return { login, isLoading, error };
}
