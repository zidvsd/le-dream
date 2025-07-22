import React from "react";
import LearnMoreButton from "../../assets/components/buttons/LearnMoreButton";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Utensils,
  ConciergeBell,
  BedDouble,
  MapPinned,
} from "lucide-react";
import { navs } from "../../utils/navLinks";
const icons = [BedDouble, Utensils, ConciergeBell, MapPinned];
const paths = navs.map((nav, index) => nav.path);
const CardsSection = () => {
  const { t } = useTranslation();
  const cardItems = t("cards.items", { returnObjects: true });

  return (
    <section id="cards-section" className="bg-custom-gray">
      <div className="custom-container mt-12 grid grid-cols-1 items-center justify-start gap-y-12 py-12 lg:py-24 xl:grid-cols-2">
        {/* text div left grid */}
        <div className="flex flex-col items-center justify-center gap-y-6 text-center xl:items-start xl:text-left">
          <h1 className="heading-section-responsive text-primary max-w-xl">
            {t("cards.heading")}
          </h1>
          <p className="font-montserrat text-neutral-600 lg:max-w-lg">
            {t("cards.description")}
          </p>
          <div className="">
            <LearnMoreButton linkId={"video-section"} />
          </div>
        </div>
        {/* Right cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {cardItems.map((card, id) => {
            const Icon = icons[id];
            return (
              <Link
                to={`/${paths[id]}`}
                key={id}
                className="hover:border-b-primary hover-utility flex h-full flex-col justify-between rounded-xl border border-b-4 border-neutral-200 border-b-transparent bg-white p-6 text-left shadow-md hover:shadow-xl"
              >
                <div className="flex flex-col items-start gap-y-3">
                  <div className="text-4xl">
                    {Icon && <Icon className="text-primary size-12" />}
                  </div>
                  <h2 className="font-body-black text-primary text-xl font-bold">
                    {card.title}
                  </h2>
                  <p className="font-montserrat text-gray-600">
                    {card.description}
                  </p>
                </div>
                <div className="text-tertiary mt-6 flex items-center gap-x-2">
                  <span className="font-body-black text-accent text-sm font-bold">
                    {t("buttons.learnMore")}
                  </span>
                  <ArrowRight className="text-accent size-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
