import React, { FC } from "react";
import Link from "next/link";

import { locale } from "@/locales";

const ShopNav: FC<{ href: string; lang: string }> = ({ href, lang }) => (
  <span className="text-sm font-sans">
    <Link href={`${href}/`}>
      <span className="hover:text-red-500">{locale[lang].home}</span>
    </Link>
    &nbsp; &gt; &nbsp;
    <span className="text-red-500">{locale[lang].shop}</span>
  </span>
);

export default ShopNav;
