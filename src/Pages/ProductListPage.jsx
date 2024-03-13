import React from "react";
import ProductCard from "../Components/ProductCard";
import fetchData from "../Helper/api";
import { useParams } from "react-router-dom";

const ProductListPage = ({ props }) => {
  const { cat } = useParams();
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-36">
      {data?.map((product, id) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListPage;
