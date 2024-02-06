import React, { FC } from "react";
import { locale } from "@/locales";
import { DEFAULT_LOCALE } from "@/src/middleware";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { links } from "../constants";

const Cart: FC<{ params: { lang: string } }> = ({
  params: { lang = DEFAULT_LOCALE },
}) => {
  const isDefaultLang = lang === DEFAULT_LOCALE;
  const href = isDefaultLang ? "" : `/${lang}`;

  return (
    <div className="flex flex-col items-center justify-between">
      <Header lang={lang} />

      <div className="flex flex-col items-center border-b-2 mb-7 w-full">
        <div className="text-7xl mt-10">{locale[lang].shop}</div>

        <span className="text-sm font-sans">
          <Link href={`${href}/`}>
            <span className="hover:text-red-500">{locale[lang].home}</span>
          </Link>
          &nbsp; &gt; &nbsp;
          <span className="text-red-500">{locale[lang].shop}</span>
        </span>

        <div className="container px-6 pt-6 mx-auto">
          <div className="mb-6 flex justify-center gap-8 w-full">
            <div className="flex flex-col gap-4 items-center cursor-pointer hover:text-red-500">
              <Image
                src={links.sportWearImage}
                alt="Sport Wear"
                width={150}
                height={150}
                className="rounded-full border-black uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              />
              <p className="text-xl">SPORTWEAR</p>
            </div>

            <div className="flex flex-col gap-4 items-center cursor-pointer hover:text-red-500">
              <Image
                src={links.footWearImage}
                alt="Sport Wear"
                width={150}
                height={150}
                className="rounded-full border-black uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              />
              <p className="text-xl">FootWear</p>
            </div>

            <div className="flex flex-col gap-4 items-center cursor-pointer hover:text-red-500">
              <Image
                src={links.mensWearImage}
                alt="Sport Wear"
                width={150}
                height={150}
                className="rounded-full border-black uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              />
              <p className="text-xl">Mens</p>
            </div>

            <div className="flex flex-col gap-4 items-center cursor-pointer hover:text-red-500">
              <Image
                src={links.womensWearImage}
                alt="Sport Wear"
                width={150}
                height={150}
                className="rounded-full border-black uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              />
              <p className="text-xl ">Womens</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
