"use client";
import React, { FC, useMemo, useState } from "react";
import { DEFAULT_LOCALE, LOCALES } from "@/src/middleware";
import { locale } from "@/locales";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Dropdown: FC<{ lang: string; isShopPage: boolean }> = ({
  lang = DEFAULT_LOCALE,
  isShopPage = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const renderDropdown = useMemo(() => {
    return isOpen ? (
      <ul
        className={`absolute ${
          isShopPage ? "bg-white" : "bg-black"
        } w-18 z-50 right-0`}
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
    ) : null;
  }, [isOpen, LOCALES, isShopPage]);

  return (
    <button
      onClick={toggleDropdown}
      className={`text-xs ${
        isShopPage ? "text-black" : "text-white"
      } px-2 hover:text-red-500 w-38`}
    >
      {locale[lang].language}
      {renderDropdown}
    </button>
  );
};

export default Dropdown;
