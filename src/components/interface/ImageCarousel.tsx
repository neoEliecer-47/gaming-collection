"use client";

import { imageCarousel, screenshots } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import ImageSkeleton from "../card/skeletons/ImageSkeleton";

const ImageCarousel = ({ images }: imageCarousel) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isImageLoaded, setIsImageLoaded] = useState(true)
  //console.log("first", images);

  function handleLoadedImages(){
    setIsImageLoaded(false)
  } 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className=" w-full max-h-[500px] overflow-hidden mt-4">
      <div
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        className="flex transition-all duration-500"
      >
        {images.map(({ id, image }, index) => (
          <div
            key={id}
            className="min-w-full h-[13rem] relative border-white/45 border-y-[1px]"
          >
            <Image
              src={image}
              alt="asas"
              quality={40}
              fill
              priority={index < 3}
              className="object-cover w-full h-full aspect-video"
              loading="eager"
              onLoad={handleLoadedImages}
            />
          </div>
        ))}
      </div>

      <section className="absolute bottom-[-50%] w-full flex items-center justify-center gap-2 ">
        {isImageLoaded && <ImageSkeleton />}
        {images.map((_, index) => (
          <button
            onClick={() => setCurrentIndex(index)}
            key={index}
            className={`transition-all h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
            style={{
              boxShadow: currentIndex === index ? "0px 0px 5px 1px #fff" : "",
            }}
          />
        ))}
      </section>
    </div>
  );
};

export default ImageCarousel;
