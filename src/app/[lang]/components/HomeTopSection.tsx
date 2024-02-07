import React, { FC } from "react";
import Image from "next/image";
import { links } from "../constants";
import { locale } from "@/locales";

const HomeTopSection: FC<{ lang: string }> = ({ lang }) => (
  <div className="relative w-full h-full">
    <Image
      src={links.mainPageProCombatImage}
      alt="Pro Combat Wear Add"
      width={2600}
      height={2600}
    />
    <div className="absolute flex flex-col gap-4 left-20 bottom-20">
      <p className="text-6xl font-extrabold">{locale[lang].twenty_four}</p>
      <p className="p-1 w-[290px] text-white bg-black text-7xl w-18 flex-nowrap">
        {locale[lang].pro_combat}
      </p>
      <p className="p-1 rounded text-white bg-black text-7xl">
        {locale[lang].base_layer}
      </p>
      <button className="w-[120px] h-[40px] bg-transparent border border-red-500 text-red-500 px-4 py-2 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-300">
        {locale[lang].shop_now}
      </button>
    </div>
  </div>
);

export default HomeTopSection;
