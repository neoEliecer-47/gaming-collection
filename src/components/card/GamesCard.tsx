"use client";

import { gamesCardProps } from "@/types";

import { useState } from "react";
import PlatformCardImages from "./PlatformCardImages";
import SliderImages from "./SliderImages";

const GamesCard = ({ gamesData }: gamesCardProps) => {
  const [moreDetailsShowed, setMoreDetailsShowed] = useState<boolean>(false);


  return (
    <section
      className={`w-full h-auto bg-gray-400 rounded-md mb-6 overflow-hidden transition-all`}
    >
      <figure className="w-full p-0 m-0 h-[12.5rem]">
        {/* <Image
          src={gamesData.background_image}
          alt={gamesData.name}
          className={`w-full h-full transition-all duration-500 ${isImageLoaded ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
          width={300}
          height={350}
          objectFit="contain"
          onLoadingComplete={handleImageLoad}
          priority={false}
          
        /> */}
        <SliderImages images={gamesData.short_screenshots} />
      </figure>
      <PlatformCardImages platforms={gamesData.parent_platforms} />
      <h4 className="text-blue-700">{gamesData.name}</h4>
      <button onClick={() => setMoreDetailsShowed(!moreDetailsShowed)}>
        {moreDetailsShowed ? "view less..." : "view more..."}
      </button>
      {moreDetailsShowed && (
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At impedit
            animi nam voluptates. Repellat ipsam iste rem facere, ducimus
            expedita! Repudiandae libero ducimus, esse voluptatem quibusdam ab
            quaerat placeat totam.
          </p>
        </div>
      )}
    </section>
  );
};

export default GamesCard;
