import React from "react";
import CategoryFilter from "../components/CategoryFilter";
import Gallery from "../components/Gallery";

const ShopContent = () => {
  return (
    <div className="w-full flex pb-14 mb-10">
      <div className="w-1/4 h-full p-4">
        <CategoryFilter />
      </div>
      <div className="w-full h-full">
        <Gallery />
      </div>
    </div>
  );
};

export default ShopContent;
