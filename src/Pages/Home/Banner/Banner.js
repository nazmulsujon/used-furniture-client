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

const Banner = () => {
  return (
    <section>
      <div className="font-bold font-sans text-2xl md:text-3xl text-center py-5 bg-[#e8f4fd] text-info">
        <Fade left>
          <h1>نشتري اثاث المستعمل بأفضل الأسعار</h1>
          <h2>We Buy Your Used Furniture At The Best Prices 🥰</h2>
        </Fade>
      </div>

      {/* <h1> || نشتري أثاثك المستعمل بأفضل الأسعار .</h1> */}
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
                <img src={image} alt="banner" className="h-full w-full" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Banner;
