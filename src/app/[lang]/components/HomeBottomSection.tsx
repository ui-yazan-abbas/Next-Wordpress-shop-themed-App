import React, { FC } from "react";
import CarouselComponent from "./Carousel";
import ZoomOnHoverImage from "./ZoomOnHoverImage";
import { links } from "../constants";
import { locale } from "@/locales";

const HomeBottomSection: FC<{ lang: string }> = ({ lang }) => {
  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col justify-center w-[800px]">
        <CarouselComponent />
      </div>
      <div className="relative">
        <ZoomOnHoverImage
          src={links.mainPageMenWearImage}
          alt="Kid playing basket ball ad"
          width={1380}
          height={1000}
        />
        <div className="absolute flex flex-col gap-4 left-[100px] top-[300px]">
          <div className="p-1 rounded text-white text-7xl">FOR MEN'S.</div>
          <button className="w-[130px] h-[40px] bg-gray-800 border border-gray-800 text-white px-4 py-2 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-300">
            {locale[lang].shop_now}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBottomSection;
