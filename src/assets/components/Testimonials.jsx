import React from "react";
import StarReview from "./StarReview";
import BookButton from "./buttons/BookButton";
import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import TestimonialProfiles from "./TestimonialProfiles";
const Testimonials = (slidesPerView = 3) => {
  const { t } = useTranslation();
  const rawReviews = t("testimonials.reviews", { returnObjects: true });
  const reviews = Object.values(rawReviews);
  console.log(reviews.length);

  return (
    <section
      id="testimonials-section"
      className="custom-container w-full space-y-6 py-8"
    >
      <div className="flex flex-col space-y-2 text-center font-semibold">
        <h2 className="font-montserrat text-neutral-600">
          {t("testimonials.title")}
        </h2>
        <h1 className="heading-section-responsive text-primary">
          {t("testimonials.description")}
        </h1>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={25}
        slidesPerView={slidesPerView}
        navigation
        pagination={{ clickable: true }}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="hover-utility flex transform flex-col justify-between space-y-4 rounded-lg border border-neutral-200 bg-white p-6 shadow-md select-none hover:-translate-y-1 hover:shadow-2xl">
              <Quote className="text-primary fill-primary size-6" />
              <StarReview />
              <p className="font-body-black text-sm text-gray-600 italic">
                {review.review}
              </p>
              <div className="flex w-full flex-row items-center justify-start gap-x-4">
                <TestimonialProfiles initials={review.initials} />
                <p className="font-header text-primary font-semibold">
                  {review.author}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-1/2 place-self-center md:mt-12 md:w-1/4 lg:w-1/8">
        <BookButton />
      </div>
    </section>
  );
};

export default Testimonials;
