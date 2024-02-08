import React, { FC } from "react";

import { Review } from "../types";
import StarsReview from "./StarsReview";

const ReviewCard: FC<{ reviews: Review[] }> = ({ reviews }) =>
  !!reviews?.length
    ? reviews.map(({ review, user, formatted_date }) => (
        <div className="p-6" key={review}>
          <div className="flex justify-between border-[1px] items-center p-8">
            <div>
              <p className="text-lg font-sans text-neutral-500">{review}</p>
              <p className="text-xs pt-2 font-sans">
                User: <span className="text-neutral-500">{user}</span>
              </p>
              <p className="text-xs pt-2 font-sans">
                Date: <span className="text-neutral-500">{formatted_date}</span>
              </p>
            </div>
            <StarsReview reviews={reviews as Review[]} />
          </div>
        </div>
      ))
    : null;

export default ReviewCard;
