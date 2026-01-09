import { useLogin } from "@/features/auth/login/model/useLogin";
import useLoginForm from "@/features/auth/login/model/useLoginForm";
import { FRONT_ROUTES } from "@/shared/config/routes/frontRoutes";
import { getApiErrorMessage } from "@/shared/ui/error/getApiErrorMessage";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

function LoginForm() {
  type LoginFormValues = {
    email: string;
    password: string;
  };
  const { login, isLoading, error } = useLogin();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();
  const apiErrorMessage = getApiErrorMessage(error);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useLoginForm();

  const onSubmit = async (values: LoginFormValues) => {
    setErrorMessage("");
    try {
      await login(values);
      navigate(FRONT_ROUTES.pages.Authentication.navigationPath);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage(t("error.errLog"));
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-4"
    >
      <label>
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          className="px-4 py-3 rounded-lg border border-gray-300"
        />
      </label>
      {errors.email && <p className="text-red-600">{errors.email.message}</p>}

      <label>
        <input
          type="password"
          placeholder="Enter your password"
          {...register("password")}
          className="px-4 py-3 rounded-lg border border-gray-300"
        />
      </label>
      {errors.password && (
        <p className="text-red-600">{errors.password.message}</p>
      )}

      <button type="submit" disabled={!isValid || isSubmitting || isLoading}>
        {isSubmitting ? t("loading") : t("buttons.login")}
      </button>

      {(error || errorMessage) && (
        <div className="text-red-500 text-sm font-medium mt-1">
          {errorMessage || apiErrorMessage || t("error.error")}
        </div>
      )}
    </form>
  );
}

export default LoginForm;
