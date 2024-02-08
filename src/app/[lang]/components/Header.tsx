"use client";
import { FC } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { DEFAULT_LOCALE } from "@/src/middleware";
import { LINKS } from "../constants";
import Nav from "./Nav";
import Dropdown from "./Dropdown";
import CartComponent from "./CartComponent";

const Header: FC<{ lang: string }> = ({ lang = DEFAULT_LOCALE }) => {
  const pathname = usePathname();
  const isShopPage = pathname.includes("/products");

  return (
    <header
      className={`flex justify-between items-center ${
        isShopPage ? "bg-white" : "bg-black"
      } w-full h-14 border-b-2`}
    >
      <div className="flex items-center p-4">
        <Image
          src={isShopPage ? LINKS.brandIconDark : LINKS.brandIconLight}
          alt="Azeno Brand Icon"
          width={100}
          height={100}
        />
      </div>
      <Nav lang={lang} isShopPage={isShopPage} />
      <div className="flex items-center p-5">
        <Dropdown lang={lang} isShopPage={isShopPage} />
        <CartComponent lang={lang} />
      </div>
    </header>
  );
};

export default Header;
