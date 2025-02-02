"use client";

import { imageCarousel, screenshots } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

const ImageCarousel = ({ images }: imageCarousel) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  console.log("first", images);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[300px] overflow-hidden mt-4 ">
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
              priority={index === 0}
              className="object-cover w-full h-full"
              loading="eager"
            />
          </div>
        ))}
      </div>

      <section className="absolute bottom-[20%] w-full flex items-center justify-center gap-2 ">
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
