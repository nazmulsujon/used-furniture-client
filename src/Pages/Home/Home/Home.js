import React from "react";
import Products from "../../Products/Products/Products";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Products></Products>
      <Contact></Contact>
    </div>
  );
};

export default Home;
