"use client";
import React, { FC, useEffect, useState } from "react";
import { fetchProductById } from "../../utils";
import ProductPageCard from "../../components/ProductPageCard";
import Link from "next/link";
import { locale } from "@/locales";
import { DEFAULT_LOCALE } from "@/src/middleware";

const AddToCartSection: FC<{ productId: string; lang: string }> = ({
  productId,
  lang,
}) => {
  const [count, setCount] = useState(0);
  const isDefaultLang = lang === DEFAULT_LOCALE;
  const href = isDefaultLang ? "" : `/${lang}`;

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

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

  return (
    <section className="w-full flex">
      <div className="w-1/2 h-16">
        <ProductPageCard name={data.name} images={data.images} />
      </div>
      <div className="w-1/2 h-16 pt-16">
        <span className="text-sm font-sans p-4">
          <Link href={`${href}/`}>
            <span className="hover:text-red-500">{locale[lang].home}</span>
          </Link>
          &nbsp; &gt; &nbsp;
          <Link href={`${href}/products`}>
            <span className="hover:text-red-500">{locale[lang].shop}</span>
          </Link>
          &nbsp; &gt; &nbsp;
          <span className="text-red-500">{data.name}</span>
        </span>

        <div className="border-b-[1px] p-4">
          <p className="text-5xl">{data.name}</p>
          <p className="text-2xl">{data.price}</p>
        </div>
        <div className="border-b-[1px] pt-4">
          <p className="font-sans text-sm text-neutral-400 p-4">
            {data.material}
          </p>

          <div className="flex p-4 w-full justify-between gap-4">
            <div className="flex items-center justify-center w-48 h-12 border border-black">
              <button
                className="w-12 h-full hover:text-red-500"
                onClick={decrement}
              >
                -
              </button>
              <div className="flex-1 flex items-center justify-center">
                {count}
              </div>
              <button
                className="w-12 h-full hover:text-red-500"
                onClick={increment}
              >
                +
              </button>
            </div>
            <button className="w-full h-25 bg-gray-800 border border-gray-800 text-white px-4 py-2 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-300">
              Add To Cart
            </button>
          </div>
        </div>

        <div className="flex flex-col p-4 mt-2 gap-4">
          <div className="flex gap-3">
            <label className="font-sans text-sm text-neutral-400">
              Category:
            </label>
            <p className="font-sans text-sm text-black">{data.category}</p>
          </div>

          <div className="flex gap-3">
            <label className="font-sans text-sm text-neutral-400">Share:</label>

            <div className="flex items-center justify-center align-middle gap-4">
              <a
                type="button"
                className="h-4 w-4 text-black hover:text-red-500"
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>

              <a
                type="button"
                className="h-4 w-4 text-black hover:text-red-500"
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>

              <a
                type="button"
                className="h-4 w-4 text-black hover:text-red-500"
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddToCartSection;
