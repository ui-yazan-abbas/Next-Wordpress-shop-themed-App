"use client";
import React, { FC, useState } from "react";

import UnderLinedButton from "../../components/UnderLinedButton";
import { Product, Review } from "../../types";
import ReviewCard from "../../components/ReviewCard";

const ReviewsSection: FC<{ product: Product; lang: string }> = ({
  product,
}) => {
  const [isDescriptionView, setIsDescriptionView] = useState(true);

  return (
    <section className="h-full pb-8">
      <div className="flex items-center w-full justify-center gap-8 pt-8">
        <UnderLinedButton
          onClick={() => setIsDescriptionView(true)}
          isPressed={isDescriptionView}
        >
          Description
        </UnderLinedButton>
        <UnderLinedButton
          id="view-reviews"
          onClick={() => setIsDescriptionView(false)}
          isPressed={!isDescriptionView}
        >
          Reviews ({product?.reviews?.length || 0})
        </UnderLinedButton>
      </div>
      {isDescriptionView ? (
        <p className="text-xs font-sans text-neutral-500 p-8">
          {product?.description}
        </p>
      ) : (
        <ReviewCard reviews={product?.reviews as Review[]} />
      )}
    </section>
  );
};

export default ReviewsSection;
