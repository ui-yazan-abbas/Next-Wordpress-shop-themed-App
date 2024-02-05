import React, { FC } from "react";
import { locale } from "@/locales";
import { DEFAULT_LOCALE } from "@/src/middleware";

const Cart: FC<{ params: { lang: string } }> = ({
  params: { lang = DEFAULT_LOCALE },
}) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {locale[lang]?.aboutHeader}
    </div>
  );
};

export default Cart;
