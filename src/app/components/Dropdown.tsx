import React, { FC, useContext } from "react";
import Link from "next/link";

import { DEFAULT_LOCALE, LOCALES } from "@/src/constants";
import { locale } from "@/locales";
import { LocalesLanguage, ProductsContextType } from "@/src/types";
import { ProductsContext } from "@/src/app/[lang]/ProductsContext";

const Dropdown: FC<{ lang: string; isShopPage: boolean }> = ({
  lang = DEFAULT_LOCALE,
  isShopPage = false,
}) => {
  const { isLangDropdownOpen, setIsLangDropdownOpen } =
    useContext<ProductsContextType>(ProductsContext);

  const toggleDropdown = () => setIsLangDropdownOpen?.(!isLangDropdownOpen);

  return (
    <button
      onClick={toggleDropdown}
      className={`text-xs ${
        isShopPage ? "text-black" : "text-white"
      } px-2 z-10 hover:text-red-500 w-38`}
    >
      {locale[lang].language}

      {isLangDropdownOpen ? (
        <ul
          className={`absolute ${
            isShopPage ? "bg-white" : "bg-black"
          } w-18 right-20`}
        >
          {LOCALES.map((localFile) => (
            <li
              key={localFile}
              className={`px-4 py-2 text-xs ${
                isShopPage ? "text-black" : "text-white"
              } hover:text-red-500 cursor-pointer`}
              onClick={toggleDropdown}
            >
              <Link
                href={
                  localFile === LocalesLanguage.AR
                    ? `/${LocalesLanguage.AR}`
                    : "/"
                }
              >
                {locale[lang][localFile]}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </button>
  );
};

export default Dropdown;
