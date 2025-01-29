"use client";

import { sliderImagesProps } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

const SliderImages = ({ images }: sliderImagesProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isImageNotLoaded, setIsImageNotLoaded] = useState<boolean>(true);

  function handlePrevImage() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  function handleNextImage() {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  function handleImageLoad() {
    setIsImageNotLoaded(false);
  }

  return (
    <div className="relative overflow-hidden h-full w-full ">
      <button
        className="absolute text-purple-600 top-[50%] z-10"
        onClick={handlePrevImage}
      >
        pre
      </button>
      <div className="flex transition-all w-full h-full">
        {images.map(({ image, id }, index) => (
          <>
            <Image
              key={id}
              src={image}
              alt="image"
              width={300}
              height={350}
              className={`w-full h-auto aspect-video transition-all duration-300 ${
                isImageNotLoaded
                  ? "opacity-0 translate-y-2"
                  : "opacity-100 translate-y-0"
              } ${index !== currentIndex && "hidden"}`}
              objectFit="contain"
              priority={index === 0}
              loading="eager"
              onLoadingComplete={handleImageLoad}
            />
          </>
        ))}
      </div>
      <button
        className="absolute text-purple-600 right-0 top-[50%] z-10"
        onClick={handleNextImage}
      >
        nxt
      </button>
    </div>
  );
};

export default SliderImages;
