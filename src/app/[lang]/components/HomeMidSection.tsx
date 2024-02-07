import React, { FC } from "react";
import { links } from "../constants";
import ZoomOnHoverImage from "./ZoomOnHoverImage";
import { locale } from "@/locales";

const HomeMidSection: FC<{ lang: string }> = ({ lang }) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row w-full h-full">
      <ZoomOnHoverImage
        src={links.mainPageSportswearImage}
        alt="Man climbing mountain ad"
        width={1380}
        height={1000}
      />
      <div className="flex flex-col items-left justify-center gap-4 p-10 bg-black w-full">
        <p className="text-white font-bold text-4xl border-b-2 border-red-500">
          {locale[lang].our_stores}
          <span className="text-red-500">.</span>
        </p>
        <p className="text-2xl text-gray-400">
          {locale[lang].high_performance}
        </p>
        <p className="text-gray-400 text-sm font-sans">
          {locale[lang].stores_desc}
        </p>
        <button className="w-[100px] h-[30px] md:w-[140px] md:h-[50px] lg:w-[160px] lg:h-[70px]  text-sm sm:text-md md:text-xl bg-transparent border border-white text-white hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-300">
          {locale[lang].shop_now}
        </button>
      </div>
    </div>
  );
};

export default HomeMidSection;
