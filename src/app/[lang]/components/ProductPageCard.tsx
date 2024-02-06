import Image from "next/image";
import React, { FC } from "react";
import { FaStar } from "react-icons/fa";
import { Review } from "../types";
import Link from "next/link";

const ProductPageCard: FC<{
  name: string;
  images: string[];
}> = ({ name, images }) => {
  return (
    <div className="flex flex-col p-4 gap-1">
      <Image alt={name} src={images[0]} height={1000} width={1000} />
    </div>
  );
};

export default ProductPageCard;
