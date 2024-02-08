"use client";
import React, { FC, PropsWithChildren, useState } from "react";
import { usePathname } from "next/navigation";

import { Product, ProductCategory, ProductsContextType } from "@/src/types";
import { DEFAULT_PRODUCT_COUNT } from "@/src/constants";

export const initialSettings = {
  cartProducts: [],
};

export const ProductsContext = React.createContext<ProductsContextType>({
  ...initialSettings,
});

export const ProductsProvider: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
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
        pathname,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
