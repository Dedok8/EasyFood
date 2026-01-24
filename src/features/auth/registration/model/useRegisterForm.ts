import { registerSchema } from "@/entities/user/api/validation";
import type { IRegisterForm } from "@/features/auth/registration/types/interfaces";

import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const defaultValues: IRegisterForm = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
};

const useRegisterForm = () => {
  const { t } = useTranslation();
  const schema = registerSchema(t);

  const form = useForm({
    mode: "onBlur",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const field = useMemo(
    () => ({
      errors: form.formState.errors,
    }),
    [form.formState.errors]
  );
  return { ...form, field };
};

export default useRegisterForm;
