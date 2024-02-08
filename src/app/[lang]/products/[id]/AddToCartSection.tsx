import React, { FC } from "react";

import { DEFAULT_LOCALE } from "@/src/constants";

import ProductPageNav from "@/src/app/components/ProductPageNav";
import ShareProduct from "@/src/app/components/ShareProduct";
import { Product, ProductCategory, Review } from "@/src/types";
import AddToCartButton from "@/src/app/components/AddToCartButton";
import ProductInfo from "@/src/app/components/ProductInfo";
import ProductCard from "@/src/app/components/ProductCard";

const AddToCartSection: FC<{ product: Product; lang: string }> = ({
  product,
  lang,
}) => {
  const isDefaultLang = lang === DEFAULT_LOCALE;
  const href = isDefaultLang ? "" : `/${lang}`;

  return (
    <section className="w-full flex flex-col sm:flex-row pb-8 border-b-[1px]">
      <div className="w-full h-full">
        <ProductCard name={product?.name} images={product?.images} />
      </div>
      <div className="w-full h-full pt-10 sm:pt-24">
        <ProductPageNav lang={lang} href={href} productName={product?.name} />
        <ProductInfo
          reviews={product?.reviews as Review[]}
          price={product?.price}
          name={product?.name}
        />
        <AddToCartButton product={product} lang={lang} />
        <ShareProduct
          category={product?.category as ProductCategory}
          lang={lang}
        />
      </div>
    </section>
  );
};

export default AddToCartSection;
