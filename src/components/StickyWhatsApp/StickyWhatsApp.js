import React, { useEffect, useState } from "react";
import "./StickyWhatsApp.css";
import whatsAppImg from "../../assets/StickyButtons/whatsapp.png";

const StickyWhatsApp = () => {
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
          <a
            href="https://api.whatsapp.com/send?phone=966531015429"
            className="whatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-14 rounded-full" src={whatsAppImg} alt="whatsApp" />
          </a>
        </div>
      )}
    </section>
  );
};

export default StickyWhatsApp;
