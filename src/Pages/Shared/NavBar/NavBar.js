import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { socialIcons } from "../../../utilities";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../../assets/logo-png-img.png";

const NavBar = () => {
  const menuItems = (
    <React.Fragment>
      <li className="ml-1 my-1 font-semibold">
        <NavLink to={`/`} className={({ isActive }) => (isActive ? " text-info rounded" : " rounded")}>
          Home
        </NavLink>
      </li>
      <li className="ml-1 my-1 font-semibold">
        <NavLink to={`/about`} className={({ isActive }) => (isActive ? " text-info rounded" : " rounded")}>
          About
        </NavLink>
      </li>
      <li className="ml-1 my-1 font-semibold">
        <NavLink to={`/contact`} className={({ isActive }) => (isActive ? " text-info rounded" : " rounded")}>
          Contact
        </NavLink>
      </li>
      <li className="ml-1 my-1 font-semibold">
        <NavLink to={`/products`} className={({ isActive }) => (isActive ? " text-info rounded" : " rounded")}>
          Products
        </NavLink>
      </li>
    </React.Fragment>
  );

  return (
    <nav>
      {/* upper nav start  */}
      <div className="upper-nav navbar bg-secondary justify-between text-neutral fixed top-0 w-full z-20 transition-all duration-300 -mt-1">
        <div>
          <p className="flex items-center ">
            <BsTelephoneFill className="mx-1"></BsTelephoneFill>
            <span className="hover:text-info font-bold"> +966 53 101 5429</span>
          </p>
        </div>
        <div>
          {socialIcons.map((item, index) => {
            const { icon, href } = item;
            return (
              <div className="mr-2 lg:mx-2" key={index}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={href}
                  className="hover:text-info font-bold md:text-xl"
                >
                  {icon}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      {/* upper nav end */}

      {/* main-nav start */}
      <div className="navbar main-nav bg-[#efefef] w-full p-10 mt-[61px]">
        <div className="navbar-start">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-serif">{menuItems}</ul>
          </div>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <GiHamburgerMenu className="text-3xl"></GiHamburgerMenu>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-5 p-2 shadow bg-[#efefef] rounded-box w-52 font-serif"
            >
              {menuItems}
            </ul>
          </div>
        </div>

        <div className="navbar-end">
          <Link to={"/"} className="">
            <img src={logo} alt="logo" className="w-32 h-16 md:w-48 md:h-20" />
          </Link>
        </div>
      </div>

      {/* main-nav end */}
    </nav>
  );
};

export default NavBar;
