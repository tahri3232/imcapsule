// ProductCard.js
import React from "react";
import FavProducts from "./FavProducts";
import { Link } from "react-router-dom";
import Image from "./Image";
import Rating from "./Rating";
import Button from "./Button";
import ThemeContext from "../Store/ThemeContext";

const ProductCategoryCard = React.memo(({ product }) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div
      className={`${
        theme
          ? "bg-white"
          : "bg-gray-800 text-white border border-gray-100"
      } mt-12 rounded-lg overflow-hidden shadow-md px-5 mx-10`}
    >
      <Image product={product} />
      <div className="p-4">
        <Link to={`/${product.title}_${product.category}_${product.id}`}>
          <h2 className="text-sm text-center font-semibold mb-2 cursor-pointer">
            {product.title}
          </h2>
        </Link>
        <Rating value={product.rating.rate} totalStars={5} />
        <p
          className={`${
            theme ? "bg-white text-black" : "bg-gray-800 text-gray-50"
          } text-gray-800 font-bold text-center mb-2`}
        >
          ${product.price}
        </p>
        <div className="flex justify-center items-center">
          <div className="flex justify-between items-center">
            <FavProducts product={product} />
            <Button text="Add To Cart" />
          </div>
        </div>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.product.id === nextProps.product.id;
});

export default ProductCategoryCard;
