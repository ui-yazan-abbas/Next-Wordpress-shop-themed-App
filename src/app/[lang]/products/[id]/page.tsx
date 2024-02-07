"use client";
import React, { FC } from "react";
import AddToCartSection from "./AddToCartSection";
import ReviewsSection from "./ReviewsSection";

const Product: FC<{ params: any }> = ({ params }) => (
  <main className="flex flex-col">
    <AddToCartSection productId={params.id} lang={params.lang} />
    <ReviewsSection productId={params.id} />
  </main>
);

export default Product;
