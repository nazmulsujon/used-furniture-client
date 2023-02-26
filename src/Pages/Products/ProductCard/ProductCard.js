import React from "react";
import { FaUser } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, eng_title, title, images, description } = product;
  console.log(product);
  const { image } = images[0];
  // console.log(image);

  return (
    <Fade bottom>
      <div className="card w-11/12 mx-auto shadow rounded">
        <figure className="h-60">
          <PhotoProvider>
            <PhotoView src={image}>
              <img className="h-full w-full" src={image} alt="product_img" />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body text-right">
          <p className="font-thin font-sans flex items-center justify-end">
            مسؤول <FaUser className="mx-1 text-info"></FaUser>
          </p>
          <h2 className="font-bold font-sans ">{eng_title}</h2>
          <h3 className="font-bold font-sans "> {title}</h3>
          <p>{description.slice(0, 150) + " . . ."}</p>
          <div className="card-actions">
            <Link
              to={`/product/${id}`}
              className="btn btn-info hover:bg-[#1aa0ffd0] normal-case w-full rounded text-amber-50 font-sans border-none"
            >
              اقرأ أكثر
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ProductCard;
