import React from "react";
import { BsPhone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { socialIcons } from "../../../utilities";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-secondary text-neutral sticky top-[100vh]">
      <div>
        <h2 className="text-center font-bold font-serif">Get connected with us || تواصل معنا</h2>
      </div>
      <div className="grid grid-flow-col gap-6 -mt-8 ">
        <Link to="/about" className="link link-hover hover:text-info font-bold">
          معلومات عنا
        </Link>
        <Link to="/contact" className="link link-hover hover:text-info font-bold">
          اتصال
        </Link>
        <Link to="/products" className="link link-hover hover:text-info font-bold">
          منتجات
        </Link>
      </div>
      <div>
        <div className="grid grid-flow-col gap-2 -mt-8">
          {socialIcons.map((item, index) => {
            const { icon, href } = item;
            return (
              <div className="mx-1 lg:mx-2" key={index}>
                <a target="_blank" rel="noopener noreferrer" href={href} className="hover:text-info font-bold text-2xl">
                  {icon}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid grid-flow-col gap-2 -mt-5">
        <div className="hover:text-info font-bold text-4xl">
          <BsPhone></BsPhone>
        </div>
        <div>
          <p className="hover:text-info font-bold">+966 53 101 5429</p>
          <p className="hover:text-info font-bold">+966 54 109 1527</p>
        </div>
      </div>
      <div className="flex items-center gap-2 -mt-5">
        <div className="hover:text-info font-bold text-2xl">
          <SlLocationPin></SlLocationPin>
        </div>
        <div>
          <p className="hover:text-info font-bold">Hail, Al Qadisiyah, Dammam 32247, Saudi</p>
        </div>
      </div>
      <div className="grid grid-flow-col gap-2 -mt-5">
        <div className="hover:text-info font-bold text-2xl">
          <FiMail></FiMail>
        </div>
        <div>
          <a href="mailto:mdnowab29@gmail.com" title="mdnowab29@gmail.com" className="hover:text-info font-bold">
            mdnowab29@gmail.com
          </a>
        </div>
      </div>
      <div className="-mt-2">
        <p>Developer Contact- Nazmul Hoque </p>
        <p className="hover:text-info -mt-2">+880 1776097768</p>
        <a href="mailto:sujon686500@gmail.com" title="sujon686500@gmail.com" className="hover:text-info -mt-2">
          sujon686500@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
