import React, { useEffect, useState } from "react";
import backtopbuttonImg from "../../assets/StickyButtons/back-top-icon.jpg";

// import link
import { animateScroll as scroll } from "react-scroll";

const BackTopButton = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 400 ? setShow(true) : setShow(false);
    });
  });
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <button
        onClick={() => scrollToTop()}
        className="w-16 h-14 fixed right-8 bottom-8 cursor-pointer flex justify-center items-center transition-all"
      >
        <img className="rounded-full w-full" src={backtopbuttonImg} alt="BackTopButton" />
      </button>
    )
  );
};

export default BackTopButton;
