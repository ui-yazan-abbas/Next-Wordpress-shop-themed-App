"use client";
import React, { FC, PropsWithChildren, useState } from "react";
import { usePathname } from "next/navigation";

import {
  LocalesLanguage,
  Product,
  ProductCategory,
  ProductsContextType,
} from "@/src/types";
import { DEFAULT_PRODUCT_COUNT } from "@/src/constants";

export const initialSettings = {
  cartProducts: [],
  langNavHref: LocalesLanguage.EN,
  lang: LocalesLanguage.EN,
};

export const ProductsContext = React.createContext<ProductsContextType>({
  ...initialSettings,
});

export const ProductsProvider: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
  const isArabicLang = pathname.includes(`/${LocalesLanguage.AR}`);
  const langNavHref = isArabicLang ? LocalesLanguage.AR : "";
  const lang = isArabicLang ? LocalesLanguage.AR : LocalesLanguage.EN;

  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [isShowCart, setIsShowCart] = useState(false);
  const [productCategory, setProductCategory] = useState(
    ProductCategory.FOOTWEAR
  );

  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [productCount, setProductCount] = useState(DEFAULT_PRODUCT_COUNT);

  return (
    <ProductsContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        isShowCart,
        setIsShowCart,
        productCategory,
        setProductCategory,
        productCount,
        setProductCount,
        isLangDropdownOpen,
        setIsLangDropdownOpen,
        isArabicLang,
        langNavHref,
        lang,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
