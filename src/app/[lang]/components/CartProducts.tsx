import React, { FC, useContext } from "react";

import { ProductsContextType } from "../types";
import { ProductsContext } from "../ProductsContext";
import CartProductCard from "./CartProductCard";

const CartProducts: FC = () => {
  const { cartProducts = [] } =
    useContext<ProductsContextType>(ProductsContext);

  return (
    <div className="mt-8">
      <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          {cartProducts.map((cartProduct) => (
            <CartProductCard key={cartProduct?.id} cartProduct={cartProduct} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartProducts;
