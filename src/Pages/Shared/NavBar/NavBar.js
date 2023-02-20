import React, { useState, useEffect } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { socialIcons } from "../../../utilities";

const NavBar = () => {
  const [isUpperNavHidden, setIsUpperNavHidden] = useState(false);
  const scrollY = window.scrollY;
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setIsUpperNavHidden(true);
      } else {
        setIsUpperNavHidden(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-screen h-screen overflow-y-scroll">
      <div
        className={`upper-nav navbar bg-secondary justify-between text-neutral transition-transform transform z-10 ${
          isUpperNavHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div>
          <p className="flex items-center ">
            <BsTelephoneFill className="mx-1"></BsTelephoneFill>{" "}
            <span className="hover:text-info font-bold"> +966 53 101 5429</span>
          </p>
        </div>
        <div>
          {socialIcons.map((item, index) => {
            const { icon, href } = item;
            return (
              <div className="mx-1 lg:mx-2" key={index}>
                <a className="hover:text-info font-bold text-xl" href={href}>
                  {icon}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className={scrollY > 0 ? "navbar main-nav bg-black w-full fixed top-0" : "navbar main-nav bg-black w-full"}>
        <p>main nav</p>
      </div>
    </nav>
  );
};

export default NavBar;
