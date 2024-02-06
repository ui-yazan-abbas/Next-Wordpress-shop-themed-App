import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import { ProductCategory, ProductsContextType } from "./types";
import { useSessionStorage } from "./components/useSessionStorage";
import { fetchProducts } from "./utils";

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
  const [cartProducts] = useSessionStorage(
    "cartProducts",
    initialSettings.cartProducts
  );
  const [productCategory, setProductCategory] = useState(
    ProductCategory.FOOTWEAR
  );
  const isDefaultLang = true;
  const isShopPage = true;
  const [footwearProducts, setFootwearProducts] = useState([]);
  const [sportswearProducts, setSportswearProducts] = useState([]);
  const [mensProducts, setMensProducts] = useState([]);
  const [womensProducts, setWomensProducts] = useState([]);

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
        footwearProducts,
        sportswearProducts,
        mensProducts,
        womensProducts,
        isShopPage,
        isDefaultLang,
        productCategory,
        setProductCategory,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
