import React, { FC } from "react";

import { LINKS } from "@/src/constants";
import ShareLink from "./ShareLink";
import FacebookIcon from "./FacebookIcon";
import TwitterIcon from "./TwitterIcon";
import InstagramIcon from "./InstagramIcon";

const ShareLinks: FC<{ isProductPage?: boolean }> = ({
  isProductPage = false,
}) => (
  <div className="flex items-center justify-center align-middle gap-4">
    <ShareLink link={LINKS.facebook} isProductPage={isProductPage}>
      <FacebookIcon />
    </ShareLink>
    <ShareLink link={LINKS.twitter} isProductPage={isProductPage}>
      <TwitterIcon />
    </ShareLink>
    <ShareLink link={LINKS.instagram} isProductPage={isProductPage}>
      <InstagramIcon />
    </ShareLink>
  </div>
);

export default ShareLinks;
