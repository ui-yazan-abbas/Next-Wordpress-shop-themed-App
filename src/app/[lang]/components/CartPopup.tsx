import React, { FC, useContext, useMemo } from "react";
import { ProductsContextType } from "../types";
import { ProductsContext } from "../ProductsContext";
import CloseIcon from "./CloseIcon";
import CartProductCard from "./CartProductCard";
import Link from "next/link";
import { calculateTotalAmount } from "../products/utils";

const CartPopup: FC<{ lang: string }> = () => {
  const { setIsShowCart, cartProducts = [] } =
    useContext<ProductsContextType>(ProductsContext);

  const totalAmount = useMemo<number>(
    (): number => calculateTotalAmount(cartProducts) || 0,
    [cartProducts]
  );

  return (
    <div
      className="relative z-10"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      {/* <!--
    Background backdrop, show/hide based on slide-over state.

    Entering: "ease-in-out duration-500"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in-out duration-500"
      From: "opacity-100"
      To: "opacity-0"
  --> */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            {/* <!--
          Slide-over panel, show/hide based on slide-over state.

          Entering: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-0"
            To: "translate-x-full"
        --> */}
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-medium text-gray-900"
                      id="slide-over-title"
                    >
                      Shopping cart
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className="relative -m-2 p-2 text-gray-400 hover:text-red-700"
                        onClick={() => setIsShowCart?.(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <CloseIcon />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {cartProducts.map((cartProduct) => (
                          <CartProductCard
                            key={cartProduct.id}
                            cartProduct={cartProduct}
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${totalAmount} $262.00</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="flex items-center justify-center bg-neutral-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-500"
                    >
                      Checkout
                    </a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or&nbsp;
                      <Link
                        type="button"
                        href="/products"
                        className="text-red-500 hover:text-red-700"
                        onClick={() => setIsShowCart?.(false)}
                      >
                        Continue Shopping&nbsp;
                        <span aria-hidden="true"> &rarr;</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
