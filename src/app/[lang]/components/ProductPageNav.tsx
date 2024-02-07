import { locale } from "@/locales";
import Link from "next/link";
import React, { FC } from "react";

const ProductPageNav: FC<{
  lang: string;
  href: string;
  productName: string;
}> = ({ href, lang, productName }) => {
  return (
    <span className="text-sm font-sans p-4">
      <Link href={`${href}/`}>
        <span className="hover:text-red-500">{locale[lang].home}</span>
      </Link>
      &nbsp; &gt; &nbsp;
      <Link href={`${href}/products`}>
        <span className="hover:text-red-500">{locale[lang].shop}</span>
      </Link>
      &nbsp; &gt; &nbsp;
      <span className="text-red-500">{productName}</span>
    </span>
  );
};

export default ProductPageNav;
