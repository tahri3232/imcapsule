import React, { memo } from "react";
import LazyLoad from "react-lazyload";

const Image = ({ product }) => {
  const loader = (
    <div className="flex justify-center items-center w-auto h-44 bg-gray-200">
      Loading...
    </div>
  );

  return (
    <LazyLoad
      height={200} // Set an appropriate height for your images
      offset={100} // Adjust the offset as needed
      placeholder={loader}
      debounce={500} // Adjust the debounce delay as needed
      className="flex justify-center"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-auto h-44 object-contain"
      />
    </LazyLoad>
  );
};

export default memo(Image);
