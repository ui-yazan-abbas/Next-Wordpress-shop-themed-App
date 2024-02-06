import React, { FC } from "react";
import { locale } from "@/locales";
import { DEFAULT_LOCALE } from "@/src/middleware";
import Link from "next/link";
import Image from "next/image";
import { links } from "../constants";
import ShopContent from "./ShopContent";
import CategoryImageButtons from "../components/CategoryImageButtons";

const Shop: FC<{ params: { lang: string } }> = ({
  params: { lang = DEFAULT_LOCALE },
}) => {
  const isDefaultLang = lang === DEFAULT_LOCALE;
  const href = isDefaultLang ? "" : `/${lang}`;

  return (
    <div className="flex flex-col items-center justify-between">
      <div className="flex flex-col items-center border-b-2 mb-7 w-full">
        <div className="text-7xl mt-10">{locale[lang].shop}</div>

        <span className="text-sm font-sans">
          <Link href={`${href}/`}>
            <span className="hover:text-red-500">{locale[lang].home}</span>
          </Link>
          &nbsp; &gt; &nbsp;
          <span className="text-red-500">{locale[lang].shop}</span>
        </span>

        <CategoryImageButtons />
      </div>
      <ShopContent />
    </div>
  );
};

export default Shop;
