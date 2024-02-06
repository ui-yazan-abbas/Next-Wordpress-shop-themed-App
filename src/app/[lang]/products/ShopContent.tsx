import React from "react";
import CategoryFilter from "../components/CategoryFilter";
import Gallery from "../components/Gallery";

const ShopContent = () => {
  return (
    <div className="w-full flex">
      <div className="w-1/4 h-16 p-4">
        <CategoryFilter />
      </div>
      <div className="w-full h-16">
        <Gallery />
      </div>
    </div>
  );
};

export default ShopContent;
