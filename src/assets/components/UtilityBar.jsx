import React from "react";
import { MapPin, Globe, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { languages } from "../../data/languages";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const UtilityBar = () => {
  const { i18n } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  const currentLang =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <div className="bg-tertiary sticky top-0 z-1000 w-full text-white">
      <div className="custom-container flex flex-row items-center justify-between py-2">
        <div
          onClick={() => setIsActive(!isActive)}
          className={`${isActive ? "bg-primary" : "hover-utility"} hover:bg-primary py relative flex cursor-pointer flex-row items-center gap-x-2 px-2`}
        >
          <Globe size={20} />
          <p className="font-body select-none">{currentLang.label}</p>

          {/* Language options dropdown */}
          <div
            className={`${isActive ? "absolute" : "hidden"} bg-tertiary top-6 left-10 min-w-[120px] flex-col items-start justify-start border border-white shadow-lg`}
          >
            {languages.map((lang, index) => (
              <p
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  localStorage.setItem("language", lang.code);
                  setIsActive(false);
                  window.location.reload();
                }}
                key={index}
                className={`font-body hover:bg-primary w-full cursor-pointer px-4 py-2 text-sm transition-colors ${
                  index !== languages.length - 1 ? "border-b border-white" : ""
                }`}
              >
                {lang.label}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-row gap-x-4">
          <Link to={"/contact"}>
            <Mail size={20} className="hover-opacity" />
          </Link>
          <Link to={"/"}>
            <MapPin size={20} className="hover-opacity" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
