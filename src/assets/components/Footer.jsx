import React from "react";
import { Facebook, Instagram, MapPin } from "lucide-react";
import Sponsors from "./Sponsors";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import tiktok from "../images/icons/tiktok-icon.svg";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary font-montserrat text-sm text-neutral-300">
      <Sponsors />
      <div className="custom-container mx-auto mt-12 px-6 pb-10">
        <div className="mt-12 grid grid-cols-1 place-items-center gap-10 text-center sm:grid-cols-2 sm:place-items-start sm:text-start lg:mt-0 lg:grid-cols-4 lg:place-items-start">
          {/* Visit Us */}
          <div className="lg:text-md space-y-3">
            <h2 className="text-lg font-bold text-neutral-200">
              {t("footer.visitUs")}
            </h2>
            <div className="flex flex-row items-center justify-center gap-x-2">
              <MapPin className="text-white" />
              <p>{t("footer.location")}</p>
            </div>
            <p>{t("footer.checkIn")}</p>
            <p>{t("footer.checkOut")}</p>
          </div>

          {/* Contact */}
          <div className="lg:text-md flex flex-col space-y-3">
            <h2 className="text-lg font-bold text-neutral-200">
              {t("footer.contact")}
            </h2>
            <a className="footer-link-hover" href="tel:+077-644-3273">
              {t("footer.landline")}
            </a>
            <a className="footer-link-hover" href="tel:+0956-974-3213">
              {t("footer.frontOffice")}
            </a>
            <a className="footer-link-hover" href="tel:+0956-974-3211">
              {t("footer.reservations")}
            </a>
            <a href="mailto:hotelledream@gmail.com" target="_blank">
              {t("footer.email")}
            </a>
          </div>

          {/* Terms & Policies */}
          <div className="lg:text-md flex flex-col space-y-3">
            <h2 className="text-lg font-bold text-neutral-200">
              {t("footer.terms")}
            </h2>
            <Link to="/legal/#privacy-section" className="footer-link-hover">
              {t("footer.privacy")}
            </Link>
            <Link to="/legal/#safety-section" className="footer-link-hover">
              {t("footer.safety")}
            </Link>
            <Link to="/legal/#terms-section" className="footer-link-hover">
              {t("footer.conditions")}
            </Link>
            <Link to="/legal/#conduct-section" className="footer-link-hover">
              {t("footer.conduct")}
            </Link>
          </div>

          {/* Quicklinks */}
          <div className="lg:text-md flex flex-col space-y-3">
            <h2 className="text-lg font-bold text-neutral-200">
              {t("footer.quicklinks")}
            </h2>
            <Link to="/rooms" className="footer-link-hover">
              {t("footer.rooms")}
            </Link>
            <Link to="/amenities" className="footer-link-hover">
              {t("footer.amenities")}
            </Link>
            <Link to="/bar-resto" className="footer-link-hover">
              {t("footer.barResto")}
            </Link>
            <Link to="/explore" className="footer-link-hover">
              {t("footer.explore")}
            </Link>
            <Link to="/about" className="footer-link-hover">
              {t("footer.aboutUs")}
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-y-4 border-t border-gray-700 pt-6 text-center text-xs text-gray-400 lg:flex-row">
          <p>{t("footer.copyright")}</p>
          <div className="flex flex-row items-center justify-center gap-x-4 text-white">
            <a href="https://www.facebook.com/le.dreamhotel" target="_blank">
              <Facebook className="hover-opacity size-6" />
            </a>
            <a href="https://www.instagram.com/le.dreamhotel" target="_blank">
              <Instagram className="hover-opacity size-6" />
            </a>
            <a href="https://www.tiktok.com/@ledreamhotel" target="_blank">
              <img className="hover-opacity size-6" src={tiktok} alt="TikTok" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
