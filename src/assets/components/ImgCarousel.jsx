import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImgCarousel = ({ id, slidesPerView = 1 }) => {
  const allGalleries = {
    homePageRooms: import.meta.glob(
      "../images/thumbnails/home-page-thumbnails/rooms/*.webp",
      {
        eager: true,
        as: "url",
      },
    ),
    homePageAmenities: import.meta.glob(
      "../images/thumbnails/home-page-thumbnails/amenities/*.webp",
      { eager: true, as: "url" },
    ),
    homePageBarResto: import.meta.glob(
      "../images/thumbnails/home-page-thumbnails/bar-resto/*.webp",
      { eager: true, as: "url" },
    ),
    homePageExplore: import.meta.glob(
      "../images/thumbnails/home-page-thumbnails/explore/*.webp",
      { eager: true, as: "url" },
    ),
  };
  const imageUrls = Object.values(allGalleries[id] || {});

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        navigation
        pagination={{ clickable: true }}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
      >
        {imageUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <img
              src={url}
              alt={`Slide ${index + 1}`}
              className="w-full rounded-lg object-cover select-none"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImgCarousel;
