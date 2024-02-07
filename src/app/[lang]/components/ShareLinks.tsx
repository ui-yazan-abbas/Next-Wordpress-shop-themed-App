import React from "react";
import ShareLink from "./ShareLink";
import FacebookIcon from "./FacebookIcon";
import TwitterIcon from "./TwitterIcon";
import InstagramIcon from "./InstagramIcon";

const ShareLinks = () => (
  <div className="flex items-center justify-center align-middle gap-4">
    <ShareLink>
      <FacebookIcon />
    </ShareLink>
    <ShareLink>
      <TwitterIcon />
    </ShareLink>
    <ShareLink>
      <InstagramIcon />
    </ShareLink>
  </div>
);

export default ShareLinks;
