import React, { useContext, useMemo } from "react";
import ProductCategoryCard from "../Components/ProductCategoryCard";
import FilterComponent from "../Components/FilterComponent";
import StoreContext from "../Store/StoreContext";
import ProductPagination from "../Components/ProductPagination";
import ThemeContext from "../Store/ThemeContext";

const Dashboard = () => {
  const { store, setStore } = useContext(StoreContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the index range for the current page
  const indexOfLastProduct = currentPage * 8;
  const indexOfFirstProduct = indexOfLastProduct - 8;
  const currentProducts = store?.displayProduct?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <div
        className={`${
          theme ? "bg-white" : "bg-gray-800 text-white border border-gray-100"
        } mt-10`}
      >
        <FilterComponent />
      </div>
      <div
        className={`${
          theme ? "bg-white" : "bg-gray-800 text-white"
        } grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4`}
      >
        {currentProducts?.map((product) => (
          <MemoizedProductCategoryCard key={product.id} product={product} />
        ))}
      </div>
      <ProductPagination
        products={store.displayProduct}
        productsPerPage={8}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};

// Memoize ProductCategoryCard to prevent unnecessary re-renders
const MemoizedProductCategoryCard = React.memo(ProductCategoryCard);

export default Dashboard;
