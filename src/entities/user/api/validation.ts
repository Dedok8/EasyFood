import * as yup from "yup";
import type { TFunction } from "i18next";

export const registerSchema = (t: TFunction) =>
  yup.object().shape({
    username: yup
      .string()
      .trim()
      .min(3, t("validation.nickname_min"))
      .max(50, t("validation.nickname_max"))
      .required(t("validation.nickname_required")),
    email: yup
      .string()
      .email(t("validation.email_invalid"))
      .required(t("validation.email_required"))
      .max(250, t("validation.email_max")),
    password: yup
      .string()
      .trim()
      .min(3, t("validation.password_min"))
      .max(16, t("validation.password_max"))
      .required(t("validation.password_required")),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], t("validation.password_match"))
      .required(t("validation.password_confirm_required")),
    phone: yup
      .string()
      .matches(/^\+380\d{9}$/, t("validation.phone_invalid"))
      .required(),
  });

export const loginSchema = (t: TFunction) =>
  yup.object().shape({
    email: yup
      .string()
      .email(t("validation.email_invalid"))
      .required(t("validation.email_required")),
    password: yup
      // .string()
      // .min(8, t("validation.password_min"))
      // .matches(/[A-Z]/, t("validation.password_upper"))
      // .matches(/[a-z]/, t("validation.password_lower"))
      // .matches(/[0-9]/, t("validation.password_digit"))
      // .matches(/[^A-Za-z0-9]/, t("validation.password_special"))
      // .required(t("validation.password_required")),
      .string()
      .trim()
      .min(3, t("validation.password_min"))
      .max(16, t("validation.password_max"))
      .required(t("validation.password_required")),
  });
