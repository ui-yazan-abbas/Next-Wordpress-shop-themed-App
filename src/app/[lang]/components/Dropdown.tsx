import React, { FC, useContext } from "react";
import Link from "next/link";

import { DEFAULT_LOCALE, LOCALES } from "@/src/middleware";
import { locale } from "@/locales";

import { ProductsContextType } from "../types";
import { ProductsContext } from "../ProductsContext";

const Dropdown: FC<{ lang: string; isShopPage: boolean }> = ({
  lang = DEFAULT_LOCALE,
  isShopPage = false,
}) => {
  const { isLangDropdownOpen, setIsLangDropdownOpen, pathname } =
    useContext<ProductsContextType>(ProductsContext);

  const toggleDropdown = () => setIsLangDropdownOpen?.(!isLangDropdownOpen);

  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return `/${segments[1]}`;
  };

  return (
    <button
      onClick={toggleDropdown}
      className={`text-xs ${
        isShopPage ? "text-black" : "text-white"
      } px-2 hover:text-red-500 w-38`}
    >
      {locale[lang].language}

      {isLangDropdownOpen ? (
        <ul
          className={`absolute ${
            isShopPage ? "bg-white" : "bg-black"
          } w-18 right-20`}
        >
          {LOCALES.map((localFile) => {
            return (
              <li
                key={localFile}
                className={`px-4 py-2 text-xs ${
                  isShopPage ? "text-black" : "text-white"
                } hover:text-red-500 cursor-pointer`}
                onClick={toggleDropdown}
              >
                <Link href={redirectedPathName(localFile)}>
                  {locale[lang][localFile]}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </button>
  );
};

export default Dropdown;
