"use client";
import React, { FC, useState } from "react";
import Image from "next/image";

import ZoomOnHoverImage from "./ZoomOnHoverImage";

const ProductPageCard: FC<{
  name: string;
  images: string[];
}> = ({ name, images }) => {
  const [imgSrc, setImgSrc] = useState("");

  return images?.[0] ? (
    <div className="flex flex-col w-full items-center justify-center p-4 gap-2 overflow-hidden">
      <ZoomOnHoverImage
        alt={name}
        src={imgSrc || images[0]}
        height={600}
        width={440}
      />
      <div className="flex gap-3 p-4">
        {images.map((src) => (
          <button key={src} onClick={() => setImgSrc(src)}>
            <Image
              alt={name}
              src={src}
              height={250}
              width={80}
              className="hover:border-[1px] border-black cursor-pointer"
            />
          </button>
        ))}
      </div>
    </div>
  ) : null;
};

export default ProductPageCard;
