import React, { FC, PropsWithChildren } from "react";

const ShareLink: FC<PropsWithChildren> = ({ children }) => (
  <a
    type="button"
    className="h-4 w-4 text-black hover:text-red-500"
    href="https://facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default ShareLink;
