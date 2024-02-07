"use client";
import { FC, useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { ProductsContext } from "../ProductsContext";
import { ProductsContextType } from "../types";
import Card from "./Card";

const RESPONSIVE = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CarouselComponent: FC = () => {
  const { sportswearProducts = [], isShowCart } =
    useContext<ProductsContextType>(ProductsContext);
  console.log("isShowCart", isShowCart);
  return (
    <Carousel
      responsive={RESPONSIVE}
      ssr
      infinite
      autoPlay
      autoPlaySpeed={3000}
      keyBoardControl
      transitionDuration={3000}
      arrows={false} // true by default
      className="m-0 p-0"
    >
      {sportswearProducts.map(
        ({ images, name, price, category, reviews, id }) => (
          <Card
            key={id}
            id={id}
            name={name}
            images={images}
            category={category}
            price={price}
            reviews={reviews}
          />
        )
      )}
    </Carousel>
  );
};

export default CarouselComponent;
