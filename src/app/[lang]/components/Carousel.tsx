"use client";
import Carousel, { ArrowProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { FC, useContext } from "react";
import { ProductsContext } from "../ProductsContext";
import Card from "./Card";
import { ProductsContextType } from "../types";

const RESPONSIVE = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
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
  const {
    cartProducts,
    isShopPage,
    mensProducts = [],
  } = useContext<ProductsContextType>(ProductsContext);

  return (
    <Carousel
      responsive={RESPONSIVE}
      ssr
      infinite
      autoPlay
      autoPlaySpeed={2000}
      keyBoardControl
      transitionDuration={2000}
      className="m-0 p-0"
    >
      {mensProducts.map(({ images, name, price, category, reviews, id }) => {
        return (
          <Card
            id={id}
            name={name}
            imageSrc={images[0]}
            category={category}
            price={price}
            reviews={reviews}
          />
        );
      })}
    </Carousel>
  );
};

export default CarouselComponent;
