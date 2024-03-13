import React from "react";
import DropDown from "./DropDown";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MenuComponent({sortOptions }) {
  return (
    <div className="flex items-center">
      <DropDown options={sortOptions.options} heading={sortOptions.heading} />
    </div>
  );
}

export default MenuComponent;
