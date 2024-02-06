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
        width={150}
        height={150}
        className="rounded-full border-black uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
      />
      <p className="text-xl">{label}</p>
    </button>
  );
};

export default CategoryImageButton;
