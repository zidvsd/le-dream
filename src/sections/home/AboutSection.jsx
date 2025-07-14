import React from "react";
import founders from "../../assets/images/thumbnails/lorry-engracia-clear.webp";

const AboutSection = () => {
  return (
    <section
      id="about-section"
      className="text-primary bg relative w-full py-20"
    >
      <div className="custom-container grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Founders Image */}
        <img
          src={founders}
          alt="Founders of Le Dream Hotel"
          className="max-h-[500px] w-full rounded-full object-contain shadow-xl"
        />

        {/* Text Content */}
        <div className="flex flex-col justify-center gap-y-6 text-center">
          <h1 className="heading-section-responsive font-garamond">
            About Le Dream Hotel
          </h1>

          <p className="font-montserrat text-neutral-600">
            Le Dream Hotel is a family-owned stay in Vigan, founded by{" "}
            <strong>Lorry and Engracia Salvador</strong> to offer comfort and
            culture in one destination.
          </p>

          <p className="font-montserrat text-neutral-600">
            Enjoy local and international flavors at our rooftop{" "}
            <strong>LAK’s Bar & Resto</strong>, with scenic views of the city
            and sea.
          </p>

          <p className="font-montserrat text-neutral-600">
            We’re located in <strong>Tamag, Vigan City</strong>—minutes from
            Calle Crisologo, Baluarte Zoo, and UNP.
          </p>

          <p className="font-montserrat text-neutral-600">
            We also host events and conferences with a spacious hall and ample
            parking.
          </p>

          <p className="font-montserrat text-neutral-600">
            At Le Dream Hotel, we’re more than a place to stay —{" "}
            <strong>we’re your dream getaway.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
