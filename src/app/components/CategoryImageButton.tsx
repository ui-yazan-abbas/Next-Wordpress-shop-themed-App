import React, { FC, useContext } from "react";
import Image from "next/image";

import { ProductCategory, ProductsContextType } from "@/src/types";
import { ProductsContext } from "@/src/app/[lang]/ProductsContext";

const CategoryImageButton: FC<{
  imgSrc: string;
  category: ProductCategory;
  translatedLabel: string;
}> = ({ imgSrc, category, translatedLabel }) => {
  const { setProductCategory } =
    useContext<ProductsContextType>(ProductsContext);

  return (
    <button
      onClick={() => {
        window.scrollTo({
          top: document.body.scrollHeight / 4,
          behavior: "smooth",
        });
        setProductCategory?.(category);
      }}
      className="flex flex-col gap-4 items-center cursor-pointer hover:text-red-500"
    >
      <Image
        src={imgSrc}
        alt={translatedLabel}
        width={120}
        height={120}
        className="hover:scale-125 rounded-full border-black uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
      />
      <p className="text-lg sm:text-xl">{translatedLabel}</p>
    </button>
  );
};

export default CategoryImageButton;
