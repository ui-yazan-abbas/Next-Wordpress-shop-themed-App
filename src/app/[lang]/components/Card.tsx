import Image from "next/image";
import React, { FC } from "react";
import { FaStar } from "react-icons/fa";
import { Review } from "../types";
import Link from "next/link";
import StarsReview from "./StarsReview";

const Card: FC<{
  name: string;
  id: string;
  imageSrc: string;
  category: string;
  price: string;
  reviews?: Review[];
}> = ({ name, id, imageSrc, category, price, reviews = [] }) => {
  return (
    <div key={name} className="flex flex-col p-4 gap-1">
      <Link href={`/products/${id}`}>
        <Image alt={name} src={imageSrc} height={1000} width={1000} />
      </Link>
      <div className="flex justify-between">
        <p className="text-xs text-neutral-400">{category}</p>
        <StarsReview reviews={reviews} />
      </div>
      <p className="text-sm font-sans">{name}</p>
      <p className="text-sm font-arial">{price}</p>
    </div>
  );
};

export default Card;
