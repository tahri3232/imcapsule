import React from "react";
import { Link } from "react-router-dom";
import FavProducts from "./FavProducts";
import Button from "./Button";
import StoreContext from "../Store/StoreContext";
import ThemeContext from "../Store/ThemeContext";
function ProductCard({ product }) {
  const { image, title, price, description, name } = product;
  const {store, setStore} = React.useContext(StoreContext);
  const {theme, setTheme} = React.useContext(ThemeContext);

  return (
    <div className={`${theme ? "bg-white" : "bg-gray-800"} mt-12 rounded-lg overflow-hidden shadow-md px-5 mx-10 cursor-pointer`}>
      <div className="flex justify-center">
        <img src={image} alt={title} loading="lazy" className="w-auto h-48 " />
      </div>
      <div className="p-4">
        <h2 className="text-sm text-center font-semibold mb-2">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="text-gray-800 font-bold">${price}</p>
          <div className="flex justify-center items-center">
            <FavProducts />
            <Button text="Add To Cart" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
