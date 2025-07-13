import React from "react";
import LearnMoreButton from "../../assets/components/buttons/LearnMoreButton";
import { cards } from "../../data/cardsData";
const CardsSection = () => {
  return (
    <div
      id="cards-section "
      className="custom-container mt-12 grid grid-cols-1 items-center justify-start py-32 lg:grid-cols-2"
    >
      {/* text div left grid */}
      <div className="flex flex-col items-center justify-center gap-y-4 text-center lg:items-start lg:text-left">
        <h1 className="heading-section-responsive text-primary">
          Top Amenities & Services at Le Dream Hotel
        </h1>
        <p className="font-montserrat">
          From stylish accommodations to rooftop dining and seamless guest
          services, Le Dream Hotel offers everything you need for a comfortable,
          memorable stay in Vigan.
        </p>
        <div className="">
          <LearnMoreButton />
        </div>
      </div>

      {/* cards right grid */}

      <div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2">
        {cards.map((card, id) => (
          <div className="flex flex-col items-center justify-center gap-y-2 p-2">
            <p>{card.icon} </p>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;
