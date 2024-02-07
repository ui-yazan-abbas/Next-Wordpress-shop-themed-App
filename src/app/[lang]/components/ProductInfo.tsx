import React, { FC } from "react";
import { Review } from "../types";
import StarsReview from "./StarsReview";

const ProductInfo: FC<{ reviews: Review[]; name: string; price: string }> = ({
  reviews,
  name,
  price,
}) => {
  return (
    <div className="border-b-[1px] p-4">
      <div className="flex pb-4 gap-2 items-center">
        <StarsReview reviews={reviews} />
        <p className="text-1xl font-sans text-neutral-400">
          ({reviews?.[0] ? reviews.length : 0})
        </p>
      </div>
      <p className="text-5xl">{name}</p>
      <p className="text-2xl">{price}</p>
    </div>
  );
};

export default ProductInfo;
