import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { locale } from "@/locales";
import { LINKS } from "@/src/constants";

const HomeTopSection: FC<{ lang: string }> = ({ lang }) => (
  <div className="relative w-full">
    <Image
      src={LINKS.mainPageProCombatImage}
      alt="Pro Combat Wear Add"
      width={2600}
      height={2600}
    />
    <div className="absolute flex flex-col gap-1 sm:gap-3 md:gap-4 left-10 bottom-10">
      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl">
        {locale[lang].twenty_four}
      </p>
      <p className="w-[75px] sm:w-[220px] md:w-[335px] lg:w-[390px] text-1xl sm:text-5xl md:text-7xl lg:text-8xl text-white bg-black  w-18 flex-nowrap">
        {locale[lang].pro_combat}
      </p>
      <p className="text-lg sm:text-5xl md:text-7xl lg:text-8xl text-white bg-black ">
        {locale[lang].base_layer}
      </p>
      <Link href="/products">
        <button className="w-[100px] h-[30px] md:w-[140px] md:h-[50px] lg:w-[160px] lg:h-[70px]  text-sm sm:text-md md:text-xl bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-300">
          {locale[lang].shop_now}
        </button>
      </Link>
    </div>
  </div>
);

export default HomeTopSection;
