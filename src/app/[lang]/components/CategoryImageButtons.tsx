"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { links } from "../constants";
import CategoryImageButton from "./CategoryImageButton";
import { ProductsContextType } from "../types";
import { ProductsContext } from "../ProductsContext";

const CategoryImageButtons = () => {
  const {
    mensProducts = [],
    womensProducts = [],
    sportswearProducts = [],
    footwearProducts = [],
  } = useContext<ProductsContextType>(ProductsContext);

  return (
    <div className="container px-6 pt-6 mx-auto">
      <div className="mb-6 flex justify-center gap-8 w-full">
        <CategoryImageButton
          imgSrc={links.sportswearCategoryImage}
          label={sportswearProducts[0]?.category}
        />
        <CategoryImageButton
          imgSrc={links.footwearCategoryImage}
          label={footwearProducts[0]?.category}
        />
        <CategoryImageButton
          imgSrc={links.mensCategoryImage}
          label={mensProducts[0]?.category}
        />
        <CategoryImageButton
          imgSrc={links.womensCategoryImage}
          label={womensProducts[0]?.category}
        />
      </div>
    </div>
  );
};

export default CategoryImageButtons;
