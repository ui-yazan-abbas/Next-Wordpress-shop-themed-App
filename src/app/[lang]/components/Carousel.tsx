"use client";
import { useState } from "react";

const Carousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = (scrollOffset: any) => {
    const container = document.getElementById("carousel-container");
    const newScrollPosition = scrollPosition + scrollOffset;
    (container as any).scrollLeft = newScrollPosition;
    setScrollPosition(newScrollPosition);
  };

  return (
    <div
      id="carousel-container"
      className="relative overflow-x-auto scrollbar-hide"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cards container */}
      <div className="flex">
        {/* Card 1 */}
        <div className="flex-shrink-0 flex flex-col items-center mx-4">
          <img
            src="/image1.jpg"
            alt="Image 1"
            className="w-64 h-auto rounded-lg"
          />
          <p className="mt-2 text-center">Description 1</p>
        </div>

        {/* Card 2 */}
        <div className="flex-shrink-0 flex flex-col items-center mx-4">
          <img
            src="/image2.jpg"
            alt="Image 2"
            className="w-64 h-auto rounded-lg"
          />
          <p className="mt-2 text-center">Description 2</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
