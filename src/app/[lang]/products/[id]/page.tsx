"use client";
import React, { FC } from "react";
import AddToCartSection from "./AddToCartSection";
import ReviewsSection from "./ReviewsSection";
import Header from "../../components/Header";

const Product: FC<{ params: { id: string; lang: string } }> = ({ params }) => (
  <main className="flex flex-col">
    <Header lang={params.lang} />
    <AddToCartSection productId={params.id} lang={params.lang} />
    <ReviewsSection productId={params.id} lang={params.lang} />
  </main>
);

export default Product;
