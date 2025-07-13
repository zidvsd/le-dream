import React from "react";
import LearnMoreButton from "../../assets/components/buttons/LearnMoreButton";
import { cards } from "../../data/cardsData";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const CardsSection = () => {
  return (
    <section
      id="cards-section"
      className="custom-container mt-12 grid grid-cols-1 items-center justify-start gap-y-12 py-32 lg:grid-cols-2"
    >
      {/* text div left grid */}
      <div className="flex flex-col items-center justify-center gap-y-6 text-center lg:items-start lg:text-left">
        <h1 className="heading-section-responsive text-primary max-w-md">
          Top Amenities & Services at Le Dream Hotel
        </h1>
        <p className="font-montserrat text-neutral-600 lg:max-w-lg">
          From stylish accommodations to rooftop dining and seamless guest
          services, Le Dream Hotel offers everything you need for a comfortable,
          memorable stay in Vigan.
        </p>
        <div className="">
          <LearnMoreButton />
        </div>
      </div>

      {/* cards right grid */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {cards.map((card, id) => (
          <Link
            to={`/${card.link}`}
            key={id}
            className="hover:border-b-primary hover-utility flex h-full flex-col justify-between rounded-xl border border-b-4 border-neutral-200 border-b-transparent bg-white p-6 text-left shadow-md hover:shadow-xl"
          >
            {/* Card top content */}
            <div className="flex flex-col items-start gap-y-3">
              <p className="text-4xl">{card.icon}</p>
              <h2 className="font-body-black text-primary text-xl font-bold">
                {card.title}
              </h2>
              <p className="font-montserrat text-gray-600">
                {card.description}
              </p>
            </div>

            {/* Bottom-aligned Learn More */}
            <div className="text-tertiary mt-6 flex items-center gap-x-2">
              <span className="font-body-black text-sm font-bold">
                Learn more
              </span>
              <ArrowRight className="size-4" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
