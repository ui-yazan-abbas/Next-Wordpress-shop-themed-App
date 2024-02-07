import React, { FC, useContext } from "react";
import CartIcon from "./CartIcon";
import CartPopup from "./CartPopup";
import { ProductsContextType } from "../types";
import { ProductsContext } from "../ProductsContext";

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
