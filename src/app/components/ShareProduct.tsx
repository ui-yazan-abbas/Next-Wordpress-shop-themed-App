import React, { FC } from "react";

import { ProductCategory } from "@/src/types";
import ShareLinks from "./ShareLinks";

const ShareProduct: FC<{ category: ProductCategory; lang: string }> = ({
  category,
}) => (
  <div className="flex flex-col p-4 mt-2 gap-4">
    <div className="flex gap-3">
      <label className="font-sans text-sm text-neutral-400">Category:</label>
      <p className="font-sans text-sm text-black">{category}</p>
    </div>

    <div className="flex gap-3">
      <label className="font-sans text-sm text-neutral-400">Share:</label>
      <ShareLinks isProductPage />
    </div>
  </div>
);

export default ShareProduct;
