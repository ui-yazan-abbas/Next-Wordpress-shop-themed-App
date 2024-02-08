import React, { FC } from "react";

import { ComponentWithBrandProductsProps } from "@/src/types";
import CategoryButton from "./CategoryButton";

const CategoryFilter: FC<ComponentWithBrandProductsProps> = ({
  mensProducts = [],
  womensProducts = [],
  sportswearProducts = [],
  footwearProducts = [],
}) => (
  <div className="hidden sm:flex flex-col  gap-2">
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

export default CategoryFilter;
