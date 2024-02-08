"use client";
import { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Product, sportsWearProducts } from "@/src/types";
import Card from "./Card";

const RESPONSIVE = {
  desktop_xl: {
    breakpoint: { max: 3000, min: 2024 },
    items: 6,
    slidesToSlide: 2, // optional, default to 1.
  },
  desktop_l: {
    breakpoint: { max: 2024, min: 1648 },
    items: 4,
    slidesToSlide: 2, // optional, default to 1.
  },
  desktop_small: {
    breakpoint: { max: 1648, min: 1206 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1106, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CarouselComponent: FC<{
  sportswearProducts: sportsWearProducts;
}> = ({ sportswearProducts = [] }) =>
  sportswearProducts ? (
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
      {(sportswearProducts as Product[]).map(
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
  ) : null;

export default CarouselComponent;
