"use client";
import React, { useContext, useMemo } from "react";
import { ProductsContext } from "../ProductsContext";
import Card from "./Card";
import { Product, ProductCategory, ProductsContextType } from "../types";

const Gallery = () => {
  const {
    cartProducts,
    isShopPage,
    mensProducts = [],
    womensProducts = [],
    sportswearProducts = [],
    footwearProducts = [],
    productCategory,
  } = useContext<ProductsContextType>(ProductsContext);

  const products = useMemo<Product[]>((): Product[] => {
    switch (productCategory) {
      case ProductCategory.SPORTSWEAR:
        return sportswearProducts;
      case ProductCategory.FOOTWEAR:
        return footwearProducts;
      case ProductCategory.WOMENS:
        return womensProducts;
      case ProductCategory.MENS:
        return mensProducts;
      default:
        return footwearProducts;
    }
  }, [
    productCategory,
    sportswearProducts,
    footwearProducts,
    womensProducts,
    mensProducts,
  ]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(({ images, name, price, reviews, category, id }) => (
        <Card
          id={id}
          name={name}
          images={images}
          category={category}
          price={price}
          reviews={reviews}
        />
      ))}
    </div>
  );
};

export default Gallery;
