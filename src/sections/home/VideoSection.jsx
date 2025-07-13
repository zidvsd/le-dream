import React from "react";
import BookButton from "../../assets/components/buttons/BookButton";

const VideoSection = ({ linkId }) => {
  return (
    <section id="video-section" className="w-full bg-white px-4 py-12">
      <div className="container mx-auto grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
        {/* Video comes second */}
        <div className="aspect-video w-full overflow-hidden rounded-md shadow-xl lg:order-2">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/cIcKUf5pP7M?autoplay=1&controls=0&fs=0&loop=1&modestbranding=1&playsinline=1&mute=1&showinfo=0&rel=0"
            title="Hotel Tour Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {/* Text comes first */}
        <div className="place-self-center text-center md:pr-6 lg:order-1 lg:text-left">
          <h2 className="text-primary heading-section-responsive font-montserrat mb-4 font-extrabold">
            Explore Our Hotel
          </h2>
          <p className="font-body-black mb-6 max-w-lg text-lg text-neutral-600">
            Take a quick video tour and discover our relaxing rooms, luxurious
            amenities, and stunning views.
          </p>
          <div className="max-w-1/2 place-self-center lg:place-self-start">
            <BookButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
