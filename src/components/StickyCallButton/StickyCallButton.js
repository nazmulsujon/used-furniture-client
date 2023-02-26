import React, { useEffect, useState } from "react";
import "./StickyCallButton.css";
import callButtonImg from "../../assets/StickyButtons/call.png";

const StickyCallButton = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 400 ? setShow(true) : setShow(false);
    });
  });
  return (
    <section className="sticky">
      {show && (
        <div>
          <a href="tel:+966531015429" className="callButton" target="_blank" rel="noopener noreferrer">
            <img className="w-14 rounded-full" src={callButtonImg} alt="whatsApp" />
          </a>
        </div>
      )}
    </section>
  );
};

export default StickyCallButton;
