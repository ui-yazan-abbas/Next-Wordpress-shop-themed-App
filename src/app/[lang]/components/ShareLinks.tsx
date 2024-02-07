import React, { FC } from "react";
import ShareLink from "./ShareLink";
import FacebookIcon from "./FacebookIcon";
import TwitterIcon from "./TwitterIcon";
import InstagramIcon from "./InstagramIcon";

const ShareLinks: FC<{ isProductPage?: boolean }> = ({
  isProductPage = false,
}) => (
  <div className="flex items-center justify-center align-middle gap-4">
    <ShareLink isProductPage={isProductPage}>
      <FacebookIcon />
    </ShareLink>
    <ShareLink isProductPage={isProductPage}>
      <TwitterIcon />
    </ShareLink>
    <ShareLink isProductPage={isProductPage}>
      <InstagramIcon />
    </ShareLink>
  </div>
);

export default ShareLinks;
