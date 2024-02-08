"use client";
import React, { FC, useContext } from "react";

import {
  ComponentWithBrandProductsProps,
  ProductsContextType,
} from "@/src/types";
import Gallery from "@/src/app/components/Gallery";
import CategoryFilter from "@/src/app/components/CategoryFilter";
import { ProductsContext } from "../ProductsContext";

const ShopContent: FC<ComponentWithBrandProductsProps> = ({
  mensProducts = [],
  womensProducts = [],
  sportswearProducts = [],
  footwearProducts = [],
}) => {
  const { isArabicLang } = useContext<ProductsContextType>(ProductsContext);

  return (
    <div
      className={`w-full flex flex-col ${
        isArabicLang ? "sm:flex-row-reverse" : "sm:flex-row"
      } pb-14 mb-10`}
    >
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
};
export default ShopContent;
