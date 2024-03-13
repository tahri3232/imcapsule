import React from "react";
import StoreContext from "../Store/StoreContext";
function FavProducts({ product }) {
  const { store, setStore } = React.useContext(StoreContext);
  return (
    <div
      onClick={(e) => {
        setStore((prev) => {
          const isProductInFav = prev.favItems.some(
            (item) => item.id === product.id
          );
          if (isProductInFav) {
            return {
              ...prev,
              favItems: prev.favItems.filter((item) => item.id !== product.id),
            };
          } else {
            return {
              ...prev,
              favItems: [...prev.favItems, product],
            };
          }
        });
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={store.favItems.includes(product) ? "red" : "none"}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    </div>
  );
}

export default FavProducts;
