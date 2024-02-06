"use client";
import Head from "next/head";
import React, { FC, useEffect, useState } from "react";
import { fetchProductById } from "../../utils";
import Card from "../../components/Card";

const Product: FC<{ params: any }> = ({ params }) => {
  const [data, setData] = useState({
    id: "",
    name: "",
    images: [],
    category: "",
    price: "",
    reviews: [],
  });

  useEffect(() => {
    fetchProductById(params.id).then((res: any) => {
      setData(res[0]);
    });
  }, []);

  return (
    <main>
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="w-full flex">
        <div className="w-1/2 h-16">
          <Card
            name={data.name}
            id={data.id}
            imageSrc={data.images?.[0]}
            category={data.category}
            price={data.price}
            reviews={data.reviews}
          />
        </div>
        <div className="w-1/2 h-16 p-4">
          <h1>Lets get this ride customised just for you...</h1>
        </div>
      </div>
    </main>
  );
};

export default Product;
