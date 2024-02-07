"use clieant";
import React, { FC, useEffect, useState } from "react";
import { fetchProductById } from "../../utils";
import { DEFAULT_PRODUCT } from "../../constants";
import UnderLinedButton from "../../components/UnderLinedButton";
import { Product, Review } from "../../types";
import StarsReview from "../../components/StarsReview";

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
  console.log("reviews", data.reviews);
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
          onClick={() => setIsDescriptionView(false)}
          isPressed={!isDescriptionView}
        >
          Reviews({data.reviews?.length || 0})
        </UnderLinedButton>
      </div>
      {isDescriptionView ? (
        <p className="text-xs font-sans text-neutral-500 p-8">
          {data.description}
        </p>
      ) : (
        <>
          {!!data.reviews?.length
            ? [{ review: "test", stars: 5 }].map(({ review }) => (
                <div className="p-6" key={review}>
                  <div className="flex justify-between border-[1px] items-center p-8">
                    <p className="text-lg font-sans text-neutral-500">
                      {review}
                    </p>
                    <StarsReview reviews={data.reviews as Review[]} />
                  </div>
                </div>
              ))
            : null}
        </>
      )}
    </section>
  );
};

export default ReviewsSection;
