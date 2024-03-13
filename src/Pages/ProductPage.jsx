import React from "react";
import Image from "../Components/Image";
import StoreContext from "../Store/StoreContext";
import ThemeContext from "../Store/ThemeContext";
import { useParams } from "react-router-dom";
import productParamLength from "../Helper/productParamLength";
import Rating from "../Components/Rating";
import Button from "../Components/Button";
import FavProducts from "../Components/FavProducts";
function ProductPage() {
  const { store, setStore } = React.useContext(StoreContext);
  const { theme, setTheme } = React.useContext(ThemeContext);
  const { cat } = useParams();
  const product = productParamLength(cat, store)[0];
  return (
    <div className="relative p-10 mt-24 h-full ">
      <div className="main flex justify-center">
        <div className="left flex items-center">
          <Image product={product} />
        </div>
        <div className="right p-10 w-1/2">
          <div>
            <h1 className="text-3xl">{product.title}</h1>
            <div className="">
              <p>Rating: {product.rating.rate}</p>
            </div>
            <div className="flex justify-start">
              <Rating value={product.rating.rate} totalStars={5} />
            </div>
            <div className="flex justify-start">
              <p>{product.description}</p>
            </div>
            <div className="flex justify-start mt-5">
              <p className="text-3xl">$ {product.price}</p>
            </div>
            <div className="mt-2">
              <FavProducts product={product} />
              <Button text="Add to Cart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
