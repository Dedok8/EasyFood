import { useLogin } from "@/features/auth/login/model/useLogin";
import useLoginForm from "@/features/auth/login/model/useLoginForm";
import { FRONT_ROUTES } from "@/shared/config/routes/frontRoutes";
import { getApiErrorMessage } from "@/shared/ui/error/getApiErrorMessage";
import Input from "@/shared/ui/Input/Input";
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
      navigate(FRONT_ROUTES.pages.OpenMobileApplication.navigationPath);
    } catch (err) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage(t("error.errLog"));
      }
    }
  };

  if (apiErrorMessage || errorMessage) {
    console.log(apiErrorMessage || errorMessage);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-4"
    >
      <label>
        <Input
          label={t("inputs.email")}
          placeholder={t("inputs.emailPlaceholder")}
          {...register("email")}
          error={errors.email?.message}
        />
      </label>
      {errors.email && (
        <p className="text-red-600 text-sm">{errors.email.message}</p>
      )}

      <label>
        <Input
          type="password"
          label={t("inputs.password")}
          placeholder={t("inputs.passwordPlaceholder")}
          {...register("password")}
          error={errors.password?.message}
        />
      </label>
      {errors.password && (
        <p className="text-red-600 text-sm">{errors.password.message}</p>
      )}

      <button
        type="submit"
        disabled={!isValid || isSubmitting || isLoading}
        className="btn-primary"
      >
        {isSubmitting ? t("loading") : t("buttons.login")}
      </button>
    </form>
  );
}

export default LoginForm;
