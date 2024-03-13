import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ value, totalStars }) => {
  const starIcons = Array.from({ length: totalStars }, (_, index) => (
    <FaStar key={index} color={index < value ? "#ffc107" : "#e4e5e9"} />
  ));

  return <div className="flex justify-center mb-3">{starIcons}</div>;
};

export default Rating;
