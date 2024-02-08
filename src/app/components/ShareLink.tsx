import React, { FC, PropsWithChildren } from "react";

const ShareLink: FC<
  PropsWithChildren<{ isProductPage?: boolean; link: string }>
> = ({ children, isProductPage = false, link }) => (
  <a
    type="button"
    className={`h-4 w-4 ${
      isProductPage ? "text-black" : "text-white"
    } hover:text-red-500`}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default ShareLink;
