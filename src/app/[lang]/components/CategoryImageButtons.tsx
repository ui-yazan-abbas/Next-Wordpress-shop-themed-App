"use client";
import React, { FC } from "react";

import { links } from "../constants";
import { ComponentWithBrandProductsProps } from "../types";
import CategoryImageButton from "./CategoryImageButton";

const CategoryImageButtons: FC<ComponentWithBrandProductsProps> = ({
  mensProducts = [],
  womensProducts = [],
  sportswearProducts = [],
  footwearProducts = [],
}) => {
  return (
    <div className="px-6 pt-6 mx-auto">
      <div className="mb-6 flex-col sm:flex-row flex justify-center gap-8 w-full">
        <div className="flex gap-8">
          <CategoryImageButton
            imgSrc={links.sportswearCategoryImage}
            label={sportswearProducts[0]?.category}
          />
          <CategoryImageButton
            imgSrc={links.footwearCategoryImage}
            label={footwearProducts[0]?.category}
          />
        </div>
        <div className="flex gap-8">
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
    </div>
  );
};

export default CategoryImageButtons;
