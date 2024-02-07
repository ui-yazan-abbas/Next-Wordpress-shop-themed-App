import React, { FC, PropsWithChildren } from "react";

const CustomLi: FC<
  PropsWithChildren<{
    isShopPage: boolean;
  }>
> = ({ isShopPage = false, children }) => {
  return (
    <li
      className={`relative text-base sm:text-lg md:text-xl ${
        isShopPage ? "after:bg-black" : "after:bg-white"
      } after:absolute after:h-px after:w-0 after:top-5 after:left-0 hover:after:w-full after:transition-all after:duration-300`}
    >
      {children}
    </li>
  );
};

export default CustomLi;
