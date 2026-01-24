import { useRegisterMutation } from "@/features/auth/api/authApi";
import type { IRegisterForm } from "@/features/auth/registration/types/interfaces";

function useRegistarionForm() {
  const [registration, { isLoading, isError }] = useRegisterMutation();

  async function register(credentials: IRegisterForm) {
    return await registration(credentials).unwrap();
  }
  return { register, isLoading, isError };
}

export default useRegistarionForm;
