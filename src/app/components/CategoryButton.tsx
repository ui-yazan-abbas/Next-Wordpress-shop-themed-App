import React, { FC, useContext } from "react";

import { ProductCategory, ProductsContextType } from "@/src/types";
import { ProductsContext } from "@/src/app/[lang]/ProductsContext";

const CategoryButton: FC<{
  itemsCount: number;
  category: ProductCategory;
  traslatedLabel: string;
}> = ({ itemsCount, category, traslatedLabel }) => {
  const { setProductCategory, isArabicLang } =
    useContext<ProductsContextType>(ProductsContext);

  return (
    <button
      onClick={() => setProductCategory?.(category)}
      className={`flex ${
        isArabicLang ? "flex-row-reverse" : ""
      } justify-between cursor-pointer text-neutral-400 hover:text-neutral-500`}
    >
      <p className="text-lg font-sans">{traslatedLabel}</p>
      <p className="text-sm flex w-6 h-6 bg-neutral-100 hover:bg-neutral-200 items-center justify-center rounded-full">
        {itemsCount}
      </p>
    </button>
  );
};

export default CategoryButton;
