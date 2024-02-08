import React, { FC } from "react";
import Link from "next/link";

import { DEFAULT_LOCALE } from "@/src/constants";
import { locale } from "@/locales";

import CustomLi from "./CustomLi";

const Nav: FC<{ lang: string; isShopPage: boolean }> = ({
  lang = DEFAULT_LOCALE,
  isShopPage = false,
}) => {
  const isDefaultLang = lang === DEFAULT_LOCALE;
  const href = isDefaultLang ? "" : `${lang}`;

  return (
    <nav>
      <ul
        className={`flex items-center gap-x-8 ${
          isShopPage ? "text-black" : "text-white"
        }`}
      >
        <CustomLi isShopPage={isShopPage}>
          <Link href={`/${href}`}>{locale[lang].home}</Link>
        </CustomLi>
        <CustomLi isShopPage={isShopPage}>
          <Link href={`${href}/products`}>{locale[lang].shop}</Link>
        </CustomLi>
      </ul>
    </nav>
  );
};

export default Nav;
