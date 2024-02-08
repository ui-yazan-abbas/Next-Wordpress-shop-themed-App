import { FaStar } from "react-icons/fa";
import React, { FC } from "react";

import { Review } from "../types";

const StarsReview: FC<{ reviews: Review[] }> = ({ reviews }) => (
  <div className="flex flex-row">
    {[...Array(5)].map((_, index): any => {
      return (
        <FaStar
          key={index}
          color={index < reviews?.[0]?.stars ? "red" : "gray"}
        />
      );
    })}
  </div>
);

export default StarsReview;
