import React, { FC } from "react";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

import { fetchProductById } from "@/src/utils";
import { Product } from "@/src/types";
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
  if (!product[0]) return notFound();
  const url = product[0].images?.[0];
  const { name, description } = product[0];

  return {
    title: name,
    description: description,
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
              alt: name,
            },
            ...previousImages,
          ],
        }
      : null,
  };
}

const Product: FC<{ params: { id: string; lang: string } }> = async ({
  params,
}) => {
  const product: Product[] = await fetchProductById(params.id);

  return (
    <main className="flex flex-col">
      <AddToCartSection product={product?.[0]} lang={params.lang} />
      <ReviewsSection product={product?.[0]} lang={params.lang} />
    </main>
  );
};

export default Product;
