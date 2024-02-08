import React, { FC, useContext } from "react";

import { ProductsContextType } from "@/src/types";
import { ProductsContext } from "@/src/app/[lang]/ProductsContext";
import CartIcon from "./CartIcon";
import CartPopup from "./CartPopup";

const CartComponent: FC<{ lang: string }> = ({ lang }) => {
  const { isShowCart, setIsShowCart } =
    useContext<ProductsContextType>(ProductsContext);

  return (
    <div className="cursor-pointer pr-3 pl-3">
      <button onClick={() => setIsShowCart?.(true)}>
        <CartIcon />
      </button>
      {isShowCart ? <CartPopup lang={lang} /> : null}
    </div>
  );
};

export default CartComponent;
