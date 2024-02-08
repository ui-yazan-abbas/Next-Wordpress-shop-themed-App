import React, { FC } from "react";
import Link from "next/link";

import { locale } from "@/locales";
import { LINKS } from "@/src/constants";
import { sportsWearProducts } from "@/src/types";
import ZoomOnHoverImage from "./ZoomOnHoverImage";
import CarouselComponent from "./Carousel";

const HomeBottomSection: FC<{
  lang: string;
  sportswearProducts: sportsWearProducts;
}> = ({ lang, sportswearProducts }) => (
  <div className="flex flex-col md:flex-row w-full h-full">
    <div className="sm:w-full sm:mt-[50px]">
      <CarouselComponent sportswearProducts={sportswearProducts} />
    </div>
    <div className="sm:absolute bottom-14 w2/5 right-0">
      <div className="relative">
        <ZoomOnHoverImage
          src={LINKS.mainPageMenWearImage}
          alt="Kid playing basket ball ad"
          width={580}
          height={300}
        />
        <div className="absolute flex flex-col gap-4 left-[60px] top-[200px] sm:left-[100px] sm:top-[300px]">
          <div className="p-1 rounded text-white text-7xl">{locale[lang].for_mens}</div>
          <Link href="/products">
            <button className="w-[100px] h-[30px] md:w-[140px] md:h-[50px] lg:w-[160px] lg:h-[70px]  text-sm sm:text-md md:text-xl bg-black text-white hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-300">
              {locale[lang].shop_now}
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default HomeBottomSection;
