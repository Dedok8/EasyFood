import useRegistarionForm from "@/features/auth/registration/model/useRegister";
import useRegisterForm from "@/features/auth/registration/model/useRegisterForm";
import { FRONT_ROUTES } from "@/shared/config/routes/frontRoutes";
import { getApiErrorMessage } from "@/shared/ui/error/getApiErrorMessage";
import Input from "@/shared/ui/Input/Input";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

function RegistrationForm() {
  type RegisterFormValue = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
  };

  const {
    register: sendRegistration,
    isLoading,
    isError,
  } = useRegistarionForm();

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();
  const apiErrorMessage = getApiErrorMessage(isError);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useRegisterForm();

  const onSubmit = async (values: RegisterFormValue) => {
    setErrorMessage("");
    try {
      await sendRegistration(values);
      navigate(FRONT_ROUTES.pages.OpenMobileApplication.navigationPath);
    } catch (error) {
      if (error instanceof Error) setErrorMessage(error.message);
      else setErrorMessage(t("error.errLog"));
    }
  };
  if (apiErrorMessage || errorMessage) {
    console.log(apiErrorMessage || errorMessage);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <Input
          label={t("inputs.userName")}
          placeholder={t("inputs.userNamePlaceholder")}
          {...register("username")}
          error={errors.username?.message}
        />
      </label>
      <label>
        <Input
          label={t("inputs.email")}
          placeholder={t("inputs.emailPlaceholder")}
          {...register("email")}
          error={errors.email?.message}
        />
      </label>

      <label>
        <Input
          label={t("inputs.password")}
          placeholder={t("inputs.passwordPlaceholder")}
          {...register("password")}
          error={errors.password?.message}
        />
      </label>

      <label>
        <Input
          label={t("inputs.confirmPassword")}
          placeholder={t("inputs.confirmPasswordPlaceholder")}
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />
      </label>
      <label>
        <Input
          label={t("inputs.phone")}
          placeholder={t("inputs.phonePlaceholder")}
          {...register("phone")}
          error={errors.phone?.message}
        />
      </label>
      <div>
        <button type="submit" disabled={!isValid || isSubmitting || isLoading}>
          {isSubmitting ? t("loading") : t("buttons.login")}
        </button>
      </div>
    </form>
  );
}

export default RegistrationForm;
