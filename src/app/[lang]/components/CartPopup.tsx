import React, { FC, useContext } from "react";
import Image from "next/image";

import { ProductsContextType } from "../types";
import { ProductsContext } from "../ProductsContext";
import { LINKS } from "../constants";

import TotalAmount from "./TotalAmount";
import CartHeader from "./CartHeader";
import CartProducts from "./CartProducts";

const CartPopup: FC<{ lang: string }> = () => {
  const { cartProducts = [] } =
    useContext<ProductsContextType>(ProductsContext);

  return (
    <div
      className="relative z-10"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <CartHeader />
                {!!cartProducts.length ? (
                  <CartProducts />
                ) : (
                  <div className="flex items-center justify-center mb-20">
                    <Image
                      src={LINKS.cart_empty_state}
                      width={300}
                      height={300}
                      alt="You don't have any products in Cart"
                    />
                  </div>
                )}
                <TotalAmount />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
