import React, { FC } from "react";
import { locale } from "@/locales";
import { DEFAULT_LOCALE } from "@/src/middleware";
import CategoryImageButtons from "../components/CategoryImageButtons";
import ShopNav from "../components/ShopNav";
import ShopContent from "./ShopContent";

const Shop: FC<{ params: { lang: string } }> = ({
  params: { lang = DEFAULT_LOCALE },
}) => {
  const isDefaultLang = lang === DEFAULT_LOCALE;
  const href = isDefaultLang ? "" : `/${lang}`;

  return (
    <div className="flex flex-col items-center justify-between h-full">

      <div className="flex flex-col items-center border-b-2 mb-7 w-full">
        <div className="text-5xl sm:text-7xl mt-10">{locale[lang].shop}</div>
        <ShopNav href={href} lang={lang} />
        <CategoryImageButtons />
      </div>
      <ShopContent />
    </div>
  );
};

export default Shop;
