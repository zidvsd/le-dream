import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import jp from "./locales/jp.json";
import cn from "./locales/cn.json";

const savedLang = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    jp: { translation: jp },
    cn: { translation: cn },
  },
  lng: savedLang, // default language
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
