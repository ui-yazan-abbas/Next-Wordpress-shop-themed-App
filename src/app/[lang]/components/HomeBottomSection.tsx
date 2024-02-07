import React, { FC } from "react";
import CarouselComponent from "./Carousel";
import ZoomOnHoverImage from "./ZoomOnHoverImage";
import { links } from "../constants";
import { locale } from "@/locales";

const HomeBottomSection: FC<{ lang: string }> = ({ lang }) => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      <div className="sm:w-[850px] sm:mt-[50px]">
        <CarouselComponent />
      </div>
      <div className="sm:absolute w2/5 right-0">
        <div className="relative">
          <ZoomOnHoverImage
            src={links.mainPageMenWearImage}
            alt="Kid playing basket ball ad"
            width={620}
            height={300}
          />
          <div className="absolute flex flex-col gap-4 left-[60px] top-[200px] sm:left-[100px] sm:top-[300px]">
            <div className="p-1 rounded text-white text-7xl">FOR MEN'S.</div>
            <button className="w-[100px] h-[30px] md:w-[140px] md:h-[50px] lg:w-[160px] lg:h-[70px]  text-sm sm:text-md md:text-xl bg-black text-white hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-300">
              {locale[lang].shop_now}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBottomSection;
