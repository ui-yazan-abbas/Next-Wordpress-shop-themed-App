import React, { FC, useContext } from "react";

import {
  ComponentWithBrandProductsProps,
  Product,
  ProductCategory,
  ProductsContextType,
} from "@/src/types";
import Card from "./Card";
import { ProductsContext } from "../ProductsContext";

const Gallery: FC<ComponentWithBrandProductsProps> = ({
  mensProducts = [],
  womensProducts = [],
  sportswearProducts = [],
  footwearProducts = [],
}) => {
  const { productCategory = ProductCategory.FOOTWEAR } =
    useContext<ProductsContextType>(ProductsContext);

  const getProducts = (productCategory: ProductCategory): Product[] => {
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
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {getProducts(productCategory).map(
        ({ images, name, price, reviews, category, id }) => (
          <Card
            key={id}
            id={id}
            name={name}
            images={images}
            category={category}
            price={price}
            reviews={reviews}
          />
        )
      )}
    </div>
  );
};

export default Gallery;
