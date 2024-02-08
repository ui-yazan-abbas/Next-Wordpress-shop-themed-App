"use client";
import React, { FC } from "react";

import CategoryFilter from "../components/CategoryFilter";
import Gallery from "../components/Gallery";
import { ComponentWithBrandProductsProps } from "../types";

const ShopContent: FC<ComponentWithBrandProductsProps> = ({
  mensProducts = [],
  womensProducts = [],
  sportswearProducts = [],
  footwearProducts = [],
}) => (
  <div className="w-full flex flex-col sm:flex-row pb-14 mb-10">
    <div className="w-1/4 h-full p-4">
      <CategoryFilter
        mensProducts={mensProducts}
        womensProducts={womensProducts}
        sportswearProducts={sportswearProducts}
        footwearProducts={footwearProducts}
      />
    </div>
    <div className="w-full h-full">
      <Gallery
        mensProducts={mensProducts}
        womensProducts={womensProducts}
        sportswearProducts={sportswearProducts}
        footwearProducts={footwearProducts}
      />
    </div>
  </div>
);

export default ShopContent;
