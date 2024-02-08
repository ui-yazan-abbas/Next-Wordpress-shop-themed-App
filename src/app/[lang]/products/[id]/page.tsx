import React, { FC } from "react";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

import { fetchProductById } from "@/utils";

import ReviewsSection from "./ReviewsSection";
import AddToCartSection from "./AddToCartSection";

export async function generateMetadata(
  {
    params,
  }: {
    params: { id: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = await fetchProductById(params.id);
  const previousImages = (await parent).openGraph?.images || [];
  if (!product) return notFound();
  const url = product.images?.[0];

  return {
    title: product.name,
    description: product.description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              alt: product.name,
            },
            ...previousImages,
          ],
        }
      : null,
  };
}

const Product: FC<{ params: { id: string; lang: string } }> = ({ params }) => (
  <main className="flex flex-col">
    <AddToCartSection productId={params.id} lang={params.lang} />
    <ReviewsSection productId={params.id} lang={params.lang} />
  </main>
);

export default Product;
