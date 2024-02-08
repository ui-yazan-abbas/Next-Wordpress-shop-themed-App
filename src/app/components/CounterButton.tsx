import React, { FC, useContext } from "react";

import { ProductsContextType } from "@/src/types";
import { ProductsContext } from "@/src/app/[lang]/ProductsContext";

const CounterButton: FC = () => {
  const { productCount = 1, setProductCount } =
    useContext<ProductsContextType>(ProductsContext);
  const increment = () => {
    setProductCount?.(productCount + 1);
  };

  const decrement = () => {
    if (productCount > 1) {
      setProductCount?.(productCount - 1);
    }
  };

  return (
    <div className="flex items-center justify-center w-48 h-12 border border-black">
      <button className="w-12 h-full hover:text-red-500" onClick={decrement}>
        -
      </button>
      <div className="flex-1 flex items-center justify-center">
        {productCount}
      </div>
      <button className="w-12 h-full hover:text-red-500" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default CounterButton;
