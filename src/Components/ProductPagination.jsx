import React from "react";
import StoreContext from "../Store/StoreContext";
import ThemeContext from "../Store/ThemeContext";
function ProductPagination({
  products,
  productsPerPage,
  handlePageChange,
  currentPage,
}) {
    const {store, setStore} = React.useContext(StoreContext);
    const {theme, setTheme} = React.useContext(ThemeContext);

  return (
    <div className={`${
        theme
          ? "bg-white"
          : "bg-gray-800 text-white border border-gray-100"
      } flex justify-center mt-16 mb-16`}>
      {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map(
        (_, index) => (
          <button
            key={index}
            className={`mx-2 px-4 py-2 ${
                theme
                  ? "bg-white"
                  : "bg-gray-800 text-white border border-gray-100"
              }  rounded ${
              currentPage === index + 1 ? "font-bold" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        )
      )}
    </div>
  );
}

export default ProductPagination;
