import type { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || i18n.language || "en";

  const handleChangeLang = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    i18n.changeLanguage(value);

    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("i18nextLng", value);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">Change language</span>

      <select
        value={lang}
        onChange={handleChangeLang}
        title="Language"
        aria-label="Language  "
      >
        <option value="en">EN</option>
        <option value="ua">UA</option>
      </select>
    </label>
  );
}

export default LanguageSwitcher;
