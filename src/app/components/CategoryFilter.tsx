import React, { FC, useContext } from "react";

import {
  ComponentWithBrandProductsProps,
  ProductsContextType,
} from "@/src/types";
import CategoryButton from "./CategoryButton";
import { locale } from "@/locales";
import { ProductsContext } from "@/src/app/[lang]/ProductsContext";

const CategoryFilter: FC<ComponentWithBrandProductsProps> = ({
  mensProducts = [],
  womensProducts = [],
  sportswearProducts = [],
  footwearProducts = [],
}) => {
  const { lang, isArabicLang } =
    useContext<ProductsContextType>(ProductsContext);

  return (
    <div className="hidden sm:flex flex-col  gap-2">
      <p className={`text-xl ${isArabicLang ? "text-right" : ""} border-b-2`}>
        {locale[lang].categories}
      </p>
      <CategoryButton
        itemsCount={mensProducts.length}
        category={mensProducts?.[0]?.category}
        traslatedLabel={locale[lang].men}
      />
      <CategoryButton
        itemsCount={footwearProducts.length}
        category={footwearProducts?.[0]?.category}
        traslatedLabel={locale[lang].footwear}
      />
      <CategoryButton
        itemsCount={sportswearProducts.length}
        category={sportswearProducts?.[0]?.category}
        traslatedLabel={locale[lang].sport}
      />
      <CategoryButton
        itemsCount={womensProducts.length}
        category={womensProducts?.[0]?.category}
        traslatedLabel={locale[lang].women}
      />
    </div>
  );
};

export default CategoryFilter;
