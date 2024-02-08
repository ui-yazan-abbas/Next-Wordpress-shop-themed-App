"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Review } from "../types";
import StarsReview from "./StarsReview";

const Card: FC<{
  name: string;
  id: string;
  images: string[];
  category: string;
  price: string;
  reviews?: Review[];
}> = ({ name, id, images, category, price, reviews = [] }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="flex flex-col p-4 gap-1">
      <Link href={`/products/${id}`}>
        <Image
          alt={name}
          src={isHovered ? images[1] : images[0]}
          height={600}
          width={400}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
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
