"use client";
import React, { FC, useEffect, useState } from "react";

import { fetchProductById } from "@/utils";
import { DEFAULT_LOCALE } from "@/src/middleware";

import ProductPageNav from "../../components/ProductPageNav";
import ShareProduct from "../../components/ShareProduct";
import { ProductCategory } from "../../types";
import AddToCartButton from "../../components/AddToCartButton";
import ProductInfo from "../../components/ProductInfo";
import ProductCard from "../../components/ProductCard";
import { DEFAULT_PRODUCT } from "../../constants";

const AddToCartSection: FC<{ productId: string; lang: string }> = ({
  productId,
  lang,
}) => {
  const isDefaultLang = lang === DEFAULT_LOCALE;
  const href = isDefaultLang ? "" : `/${lang}`;
  const [data, setData] = useState(DEFAULT_PRODUCT);

  useEffect(() => {
    fetchProductById(productId).then((res: any) => {
      setData(res[0]);
    });
  }, []);

  return (
    <section className="w-full flex flex-col sm:flex-row pb-8 border-b-[1px]">
      <div className="w-full h-full">
        <ProductCard name={data.name} images={data.images} />
      </div>
      <div className="w-full h-full pt-10 sm:pt-24">
        <ProductPageNav lang={lang} href={href} productName={data.name} />
        <ProductInfo
          reviews={data.reviews}
          price={data.price}
          name={data.name}
        />
        <AddToCartButton product={data} lang={lang} />
        <ShareProduct category={data.category as ProductCategory} lang={lang} />
      </div>
    </section>
  );
};

export default AddToCartSection;
