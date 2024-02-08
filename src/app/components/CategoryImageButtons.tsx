"use client";
import React, { FC, useContext } from "react";

import { locale } from "@/locales";
import { LINKS } from "@/src/constants";
import {
  ComponentWithBrandProductsProps,
  ProductsContextType,
} from "@/src/types";
import { ProductsContext } from "@/src/app/[lang]/ProductsContext";
import CategoryImageButton from "./CategoryImageButton";

const CategoryImageButtons: FC<ComponentWithBrandProductsProps> = ({
  mensProducts = [],
  womensProducts = [],
  sportswearProducts = [],
  footwearProducts = [],
}) => {
  const { lang } = useContext<ProductsContextType>(ProductsContext);

  return (
    <div className="px-6 pt-6 mx-auto">
      <div className="mb-6 flex-col sm:flex-row flex justify-center gap-8 w-full">
        <div className="flex gap-8">
          <CategoryImageButton
            imgSrc={LINKS.sportswearCategoryImage}
            translatedLabel={locale[lang].sport}
            category={sportswearProducts[0]?.category}
          />
          <CategoryImageButton
            imgSrc={LINKS.footwearCategoryImage}
            translatedLabel={locale[lang].footwear}
            category={footwearProducts[0]?.category}
          />
        </div>
        <div className="flex gap-8">
          <CategoryImageButton
            imgSrc={LINKS.mensCategoryImage}
            translatedLabel={locale[lang].men}
            category={mensProducts[0]?.category}
          />
          <CategoryImageButton
            imgSrc={LINKS.womensCategoryImage}
            translatedLabel={locale[lang].women}
            category={womensProducts[0]?.category}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryImageButtons;
