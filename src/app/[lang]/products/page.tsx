import React, { FC } from "react";
import { locale } from "@/locales";
import { DEFAULT_LOCALE } from "@/src/constants";
import { fetchProducts } from "@/src/utils";

import CategoryImageButtons from "@/src/app/components/CategoryImageButtons";
import ShopNav from "@/src/app/components/ShopNav";
import ShopContent from "./ShopContent";

export const metadata = {
  title: "Shop Page",
  description: "View Our Products and Deals for Sportswear",
  robots: {
    follow: true,
    index: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const Shop: FC<{ params: { lang: string } }> = async ({
  params: { lang = DEFAULT_LOCALE },
}) => {
  const isDefaultLang = lang === DEFAULT_LOCALE;
  const href = isDefaultLang ? "" : `/${lang}`;
  const { products } = await fetchProducts();
  const { womens, mens, footwear, sportswear } = products?.[0];

  return (
    <main className="flex flex-col items-center justify-between h-full">
      <div className="flex flex-col items-center border-b-2 mb-7 w-full">
        <div className="text-5xl sm:text-7xl mt-10">{locale[lang].shop}</div>
        <ShopNav href={href} lang={lang} />
        <CategoryImageButtons
          womensProducts={womens}
          mensProducts={mens}
          footwearProducts={footwear}
          sportswearProducts={sportswear}
        />
      </div>
      <ShopContent
        womensProducts={womens}
        mensProducts={mens}
        footwearProducts={footwear}
        sportswearProducts={sportswear}
      />
    </main>
  );
};

export default Shop;
