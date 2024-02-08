import React, { FC, useContext } from "react";

import { ProductsContextType } from "../types";
import { ProductsContext } from "../ProductsContext";
import CloseIcon from "./CloseIcon";

const CartHeader: FC = () => {
  const { setIsShowCart } = useContext<ProductsContextType>(ProductsContext);

  return (
    <div className="border-b-[1px] px-4 py-6 sm:px-6">
      <div className="flex items-start justify-between">
        <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
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
    </div>
  );
};

export default CartHeader;
