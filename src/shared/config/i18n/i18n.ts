import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ua from "./locales/ua.json";
import en from "./locales/en.json";
import LanguageDetector from "i18next-browser-languagedetector";

const saveLang = localStorage.getItem("i18nextLng") || "en";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ua: { translation: ua },
    },
    lng: saveLang,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
