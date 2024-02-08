"use client";
import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import { Product, ProductCategory, ProductsContextType } from "./types";
import { fetchProducts } from "./utils";
import { usePathname } from "next/navigation";

export const initialSettings = {
  isShopPage: false,
  isDefaultLang: false,
  cartProducts: [],
  footwearProducts: [],
  sportwearProducts: [],
  mensProducts: [],
  womensProducts: [],
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
  const isDefaultLang = true;
  const isShopPage = true;
  const [footwearProducts, setFootwearProducts] = useState([]);
  const [sportswearProducts, setSportswearProducts] = useState([]);
  const [mensProducts, setMensProducts] = useState([]);
  const [womensProducts, setWomensProducts] = useState([]);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [productCount, setProductCount] = useState(1);

  useEffect(() => {
    fetchProducts().then((res): any => {
      setFootwearProducts(res?.products?.[0]?.footwear);
      setSportswearProducts(res?.products?.[0]?.sportswear);
      setMensProducts(res?.products?.[0]?.mens);
      setWomensProducts(res?.products?.[0]?.womens);
    });
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        isShowCart,
        setIsShowCart,
        footwearProducts,
        sportswearProducts,
        mensProducts,
        womensProducts,
        isShopPage,
        isDefaultLang,
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
