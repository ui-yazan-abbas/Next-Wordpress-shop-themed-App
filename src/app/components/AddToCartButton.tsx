"use client";
import React, { FC, useCallback, useContext } from "react";

import { Product, ProductsContextType } from "@/src/types";
import { DEFAULT_PRODUCT_COUNT } from "@/src/constants";
import { ProductsContext } from "@/src/app/[lang]/ProductsContext";
import CounterButton from "./CounterButton";

const AddToCartButton: FC<{ product: Product; lang: string }> = ({
  product,
}) => {
  const {
    setIsShowCart,
    setCartProducts,
    setProductCount,
    cartProducts = [],
    productCount = 1,
  } = useContext<ProductsContextType>(ProductsContext);

  const addProductToCart = useCallback(() => {
    // Check if the product already exists in the cart
    const existingProductIndex = cartProducts.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // If the product exists, update its quantity
      const updatedCartProducts = [...cartProducts];
      updatedCartProducts[existingProductIndex].qty += productCount;
      setCartProducts?.(updatedCartProducts);
    } else {
      // If the product doesn't exist, add it to the cart
      setCartProducts?.([...cartProducts, { ...product, qty: productCount }]);
    }

    setIsShowCart?.(true);
    setProductCount?.(DEFAULT_PRODUCT_COUNT);
  }, [
    cartProducts,
    productCount,
    setCartProducts,
    setIsShowCart,
    setProductCount,
  ]);

  return (
    <div className="border-b-[1px] pt-4">
      <p className="font-sans text-sm text-neutral-400 p-4">
        {product?.material}
      </p>
      <div className="flex p-4 w-full justify-between gap-4">
        <CounterButton />
        <button
          onClick={addProductToCart}
          className="w-full h-25 bg-gray-800 border border-gray-800 text-white px-4 py-2 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-300"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default AddToCartButton;
