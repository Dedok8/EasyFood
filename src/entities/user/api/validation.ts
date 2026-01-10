import * as yup from "yup";
import type { TFunction } from "i18next";

export const registerSchema = (t: TFunction) =>
  yup.object().shape({
    displayName: yup
      .string()
      .trim()
      .min(2, t("validation.nickname_min"))
      .max(30, t("validation.nickname_max"))
      .required(t("validation.nickname_required")),
    email: yup
      .string()
      .email(t("validation.email_invalid"))
      .required(t("validation.email_required")),
    password: yup
      .string()
      .min(8, t("validation.password_min"))
      .max(100, t("validation.password_max"))
      .required(t("validation.password_required")),
  });

export const loginSchema = (t: TFunction) =>
  yup.object().shape({
    email: yup
      .string()
      .email(t("validation.email_invalid"))
      .required(t("validation.email_required")),
    password: yup
      .string()
      .min(8, t("validation.password_min"))
      .matches(/[A-Z]/, t("validation.password_upper"))
      .matches(/[a-z]/, t("validation.password_lower"))
      .matches(/[0-9]/, t("validation.password_digit"))
      .matches(/[^A-Za-z0-9]/, t("validation.password_special"))
      .required(t("validation.password_required")),
  });
