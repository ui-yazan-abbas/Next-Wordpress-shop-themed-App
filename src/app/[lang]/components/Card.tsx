import Image from "next/image";
import React, { FC, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Review } from "../types";
import Link from "next/link";
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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div key={name} className="flex flex-col p-4 gap-1">
      <Link href={`/products/${id}`}>
        <Image
          alt={name}
          src={isHovered ? images[1] : images[0]}
          height={1000}
          width={1000}
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
