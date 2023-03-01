import React, { useEffect, useState } from "react";
import "./SingleProductDetails.css";
import { Link, useParams } from "react-router-dom";

// Animation
import { Fade } from "react-reveal";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import Specialities from "../../../components/Specialities/Specialities";
// spinner
import Spinner from "../../../components/Spinner/Spinner";
// react icons
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
// socialIcons
import { socialIcons } from "../../../utilities";

const SingleProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const productLength = Object.keys(product).length;

  const { title, eng_title, images, description } = product;

  //   fetch product by id
  useEffect(() => {
    fetch(`https://api.dammamusedfurniture.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (productLength === 0) {
    return <Spinner></Spinner>;
  }

  return (
    <section className="py-10 w-[90vw] lg:w-[70vw] mx-auto">
      <Link to="/" className="flex items-center mb-5 lg:mb-10 text-secondary">
        <BsFillArrowLeftCircleFill className="mr-2"></BsFillArrowLeftCircleFill> Back
      </Link>
      <div className="slider-images-wrapper">
        <Swiper
          style={{
            "--swiper-navigation-color": "black",
            "--swiper-pagination-color": "black",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {/*upper SwiperSlide */}
          {images &&
            images.map((imageObj, index) => {
              const { image } = imageObj;
              return (
                <SwiperSlide key={index}>
                  <div className="h-[240px] w-[600px] md:h-[500px] md:w-[90vw] ">
                    <img className="w-full h-full" src={image} alt="product_img" />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {/*bottom SwiperSlide */}
          {images &&
            images.map((imageObj, index) => {
              const { image } = imageObj;
              return (
                <SwiperSlide key={index}>
                  <div className="h-16 lg:h-24 w-[90vw]">
                    <img className="h-full w-full cursor-pointer" src={image} alt="product_img" />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className="text-description text-center lg:w-10/12 mx-auto">
        <Fade left>
          <h1 className="text-2xl lg:text-4xl text-info font-serif mt-6 lg:mt-12">{eng_title}</h1>
        </Fade>
        <Fade right>
          <h1 className="text-3xl lg:text-4xl text-info font-serif my-4">{title}</h1>
        </Fade>
        <Fade bottom>
          <p className="text-xl md:text-2xl font-serif">{description}</p>
        </Fade>
      </div>
      <div className="text-center my-10">
        <Specialities></Specialities>
      </div>
      <div>
        <div className="flex justify-center items-center">
          <p className="font-bold text-xl font-sans">اتبعنا :</p>
          <div className="flex justify-end">
            {socialIcons.map((item, index) => {
              const { icon, href } = item;
              return (
                <div className="ml-2" key={index}>
                  <a target="_blank" rel="noopener noreferrer" href={href} className="text-info text-xl">
                    {icon}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductDetails;
