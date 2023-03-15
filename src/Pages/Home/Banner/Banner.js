import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//Import react reveal
import Fade from "react-reveal/Fade";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Banner.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { banners } from "../../../utilities";

// react photoview package
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Banner = () => {
  return (
    <section>
      <div className="section-title mx-2 font-bold text-xl md:text-2xl text-center py-5 text-info">
        <Fade left>
          <h1>نشتري اثاث المستعمل بأفضل الأسعار</h1>
        </Fade>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={5}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {banners.map((banner, index) => {
          const { image } = banner;
          return (
            <SwiperSlide key={index}>
              <div className="h-[240px] w-[600px] md:h-[500px] md:w-[659px]">
                <PhotoProvider>
                  <PhotoView src={image}>
                    <img src={image} alt="banner" className="h-full w-full rounded" />
                  </PhotoView>
                </PhotoProvider>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Banner;
