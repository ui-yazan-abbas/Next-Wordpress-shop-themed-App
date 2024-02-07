import React, { FC, useContext, useState } from "react";
import CounterButton from "./CounterButton";
import { Product, ProductsContextType } from "../types";
import { ProductsContext } from "../ProductsContext";

const AddToCartButton: FC<{ product: Product; lang: string }> = ({
  product,
}) => {
  const {
    setIsShowCart,
    setCartProducts,
    cartProducts = [],
  } = useContext<ProductsContextType>(ProductsContext);
  const [count, setCount] = useState(1);

  console.log("CART PRODUCTS", cartProducts);

  return (
    <div className="border-b-[1px] pt-4">
      <p className="font-sans text-sm text-neutral-400 p-4">
        {product.material}
      </p>
      <div className="flex p-4 w-full justify-between gap-4">
        <CounterButton count={count} setCount={setCount} />
        <button
          onClick={() => {
            setCartProducts?.([...cartProducts, { ...product, qty: count }]);
            setIsShowCart?.(true);
          }}
          className="w-full h-25 bg-gray-800 border border-gray-800 text-white px-4 py-2 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-300"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default AddToCartButton;
