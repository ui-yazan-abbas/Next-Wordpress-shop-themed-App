import React, { FC, useContext, useMemo } from "react";
import Link from "next/link";

import { ProductsContextType } from "../types";
import { calculateTotalAmount } from "../products/utils";
import { ProductsContext } from "../ProductsContext";

const TotalAmount: FC = () => {
  const { setIsShowCart, cartProducts = [] } =
    useContext<ProductsContextType>(ProductsContext);
  const isEmptyCart = !cartProducts.length;

  const totalAmount = useMemo<number>(
    (): number => calculateTotalAmount(cartProducts) || 0,
    [cartProducts]
  );

  return (
    <div className="sticky bottom-0 bg-white border-t border-gray-200 px-4 py-6 sm:px-6">
      <div className="flex justify-between text-base font-medium text-gray-900">
        <p>Subtotal</p>
        <p className={isEmptyCart ? "text-neutral-200" : ""}>${totalAmount}</p>
      </div>
      <p className="mt-0.5 text-sm text-gray-500">
        Shipping and taxes calculated at checkout.
      </p>
      <button
        disabled={isEmptyCart}
        className={`w-full mt-6 flex items-center justify-center ${
          isEmptyCart ? "bg-neutral-200" : "bg-neutral-800"
        }  px-6 py-3 text-base font-medium text-white shadow-sm ${
          isEmptyCart ? "" : "hover:bg-red-500"
        }`}
      >
        Checkout
      </button>
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
  );
};

export default TotalAmount;
