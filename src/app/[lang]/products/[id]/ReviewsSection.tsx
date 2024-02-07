"use clieant";
import React, { FC, useEffect, useState } from "react";
import { fetchProductById } from "../../utils";

const ReviewsSection: FC<{ productId: string }> = ({ productId }) => {
  const [data, setData] = useState({
    id: "",
    name: "",
    images: [],
    category: "",
    price: "",
    reviews: [],
    material: "",
  });

  useEffect(() => {
    fetchProductById(productId).then((res: any) => {
      setData(res[0]);
    });
  }, []);

  return <section></section>;
};

export default ReviewsSection;
