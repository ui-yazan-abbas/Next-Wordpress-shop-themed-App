"use client";
import React, { FC, useEffect, useState } from "react";
import { fetchProductById } from "@/utils";

import { DEFAULT_PRODUCT } from "../../constants";
import UnderLinedButton from "../../components/UnderLinedButton";
import { Product, Review } from "../../types";
import ReviewCard from "../../components/ReviewCard";

const ReviewsSection: FC<{ productId: string; lang: string }> = ({
  productId,
}) => {
  const [data, setData] = useState<Product>(DEFAULT_PRODUCT);
  const [isDescriptionView, setIsDescriptionView] = useState(true);

  useEffect(() => {
    fetchProductById(productId).then((res: any) => {
      setData(res[0]);
    });
  }, []);

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
          Reviews ({data.reviews?.length || 0})
        </UnderLinedButton>
      </div>
      {isDescriptionView ? (
        <p className="text-xs font-sans text-neutral-500 p-8">
          {data.description}
        </p>
      ) : (
        <ReviewCard reviews={data.reviews as Review[]} />
      )}
    </section>
  );
};

export default ReviewsSection;
