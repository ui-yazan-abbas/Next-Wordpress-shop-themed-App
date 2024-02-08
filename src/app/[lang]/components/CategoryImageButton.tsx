import React, { FC, useContext } from "react";
import Image from "next/image";
import { ProductCategory, ProductsContextType } from "../types";
import { ProductsContext } from "../ProductsContext";

const CategoryImageButton: FC<{ imgSrc: string; label: ProductCategory }> = ({
  imgSrc,
  label,
}) => {
  const { setProductCategory } =
    useContext<ProductsContextType>(ProductsContext);

  return (
    <button
      onClick={() => setProductCategory?.(label)}
      className="flex flex-col gap-4 items-center cursor-pointer hover:text-red-500"
    >
      <Image
        src={imgSrc}
        alt={label}
        width={120}
        height={120}
        className="hover:scale-125 rounded-full border-black uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
      />
      <p className="text-lg sm:text-xl">{label}</p>
    </button>
  );
};

export default CategoryImageButton;
