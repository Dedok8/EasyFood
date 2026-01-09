import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { loginSchema } from "@/entities/user/api/validation";
import { useMemo } from "react";

interface ILoginForm {
  email: string;
  password: string;
}

const defaultValues: ILoginForm = {
  email: "",
  password: "",
};

const useLoginForm = () => {
  const { t } = useTranslation();
  const schema = loginSchema(t);

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

export default useLoginForm;
