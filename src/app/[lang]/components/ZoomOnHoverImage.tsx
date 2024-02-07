import React, { FC } from "react";
import Image from "next/image";

const ZoomOnHoverImage: FC<{
  src: string;
  alt: string;
  width: number;
  height: number;
}> = ({ src, alt, width, height }) => {
  return (
    <div className="relative overflow-hidden">
      <Image
        src={src}
        alt={alt}
        className="hover:scale-125 transition-all duration-500 cursor-pointer"
        width={width}
        height={height}
      />
    </div>
  );
};

export default ZoomOnHoverImage;
