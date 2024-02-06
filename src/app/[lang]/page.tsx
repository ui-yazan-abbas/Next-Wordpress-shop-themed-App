import { FC } from "react";
import { locale } from "@/locales";
import Image from "next/image";
import { DEFAULT_LOCALE } from "@/src/middleware";
import { links } from "./constants";
import CarouselComponent from "./components/Carousel";

const Home: FC<{ params: { lang: string } }> = ({
  params: { lang = DEFAULT_LOCALE },
}) => {
  return (
    <main className="flex flex-col items-center justify-between w-full h-screen">
      <div className="relative w-full">
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

      <div className="flex w-full">
        <div className="relative h-min overflow-hidden">
          <Image
            src={links.mainPageSportswearImage}
            alt="Man climbing mountain ad"
            className="hover:scale-125 transition-all duration-500 cursor-pointer"
            width={1380}
            height={1000}
          />
        </div>
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
          <button className="w-[130px] h-[40px] bg-transparent border border-gray-400 text-white px-4 py-2 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-300">
            {locale[lang].shop_now}
          </button>
        </div>
      </div>

      <div className="flex w-full">
        <div className="flex flex-col justify-center w-[800px]">
          <CarouselComponent />
        </div>
        <div className="relative overflow-hidden">
          <Image
            src={links.mainPageMenWearImage}
            className="hover:scale-125 transition-all duration-500 cursor-pointer"
            alt="Kid playing basket ball ad"
            width={1300}
            height={1100}
          />
          <div className="absolute flex flex-col gap-4 left-[100px] top-[300px]">
            <div className="p-1 rounded text-white text-7xl">FOR MEN'S.</div>
            <button className="w-[130px] h-[40px] bg-gray-800 border border-gray-800 text-white px-4 py-2 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-300">
              {locale[lang].shop_now}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
