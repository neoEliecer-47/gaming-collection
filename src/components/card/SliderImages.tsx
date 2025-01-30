"use client";

import { sliderImagesProps } from "@/types";
import Image from "next/image";
import { useRef, useState } from "react";
import ArrowLeftIcon from "../icons/ArrowPrev";
import ArrowRightIcon from "../icons/ArrowNext";
import ImageSkeleton from "./skeletons/ImageSkeleton";

const SliderImages = ({ images }: sliderImagesProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isImageNotLoaded, setIsImageNotLoaded] = useState<boolean>(true);
  const touchStartX = useRef<number | null>(null);

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;

    if (deltaX > 50) {
      //swipe right
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    } else if (deltaX < -50) {
      //swipe left
      setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }

    touchStartX.current = null;
  }

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
    <div
      className="relative overflow-hidden h-full w-full"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        className="absolute bg-black/35 top-[50%] z-10 ml-2 p-1 rounded-full"
        onClick={handlePrevImage}
      >
        <ArrowLeftIcon />
      </button>
      <div
        className="flex transition-all duration-500 w-full h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map(({ image, id }, index) => (
          <>
            {isImageNotLoaded && <ImageSkeleton />}
            <Image
              key={id}
              src={image}
              alt="image"
              width={300}
              height={350}
              quality={40}
              className={`w-full h-auto aspect-video transition-all duration-300 ${
                isImageNotLoaded
                  ? "opacity-0 translate-y-2"
                  : "opacity-100 translate-y-0"
              } ${index !== currentIndex ? "opacity-0" : "opacity-100"}`} //this helps images can avoid suddenly renders since the are not even in the DOM if display none is set
              objectFit="contain"
              priority={index === 0} //only preload the very first image
              loading={index < 3 ? "eager" : "lazy"} //only load eagerly the first four images and lazy the rest ones
              onLoadingComplete={handleImageLoad}
            />
          </>
        ))}
      </div>
      <button
        className="absolute bg-black/35 right-0 top-[50%] z-10 mr-2 p-1 rounded-full"
        onClick={handleNextImage}
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
};

export default SliderImages;
