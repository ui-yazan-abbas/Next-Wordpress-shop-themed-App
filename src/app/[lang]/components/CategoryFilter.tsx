"use client";
import React, { useContext } from "react";
import { ProductsContext } from "../ProductsContext";
import CategoryButton from "./CategoryButton";
import { ProductsContextType } from "../types";

const CategoryFilter = () => {
  const {
    cartProducts,
    isShopPage,
    mensProducts = [],
    womensProducts = [],
    sportswearProducts = [],
    footwearProducts = [],
  } = useContext<ProductsContextType>(ProductsContext);

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl border-b-2">Categories</p>
      <CategoryButton
        itemsCount={mensProducts.length}
        category={mensProducts?.[0]?.category}
      />
      <CategoryButton
        itemsCount={footwearProducts.length}
        category={footwearProducts?.[0]?.category}
      />
      <CategoryButton
        itemsCount={sportswearProducts.length}
        category={sportswearProducts?.[0]?.category}
      />
      <CategoryButton
        itemsCount={womensProducts.length}
        category={womensProducts?.[0]?.category}
      />
    </div>
  );
};

export default CategoryFilter;
