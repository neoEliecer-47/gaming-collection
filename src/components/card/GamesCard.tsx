"use client";

import { gamesCardProps } from "@/types";

import { useState } from "react";
import PlatformCardImages from "./PlatformCardImages";
import SliderImages from "./SliderImages";
import Link from "next/link";

const GamesCard = ({ gamesData }: gamesCardProps) => {
  const [moreDetailsShowed, setMoreDetailsShowed] = useState<boolean>(false);


  return (
    <section
      className={`w-full md:w-[23rem] h-auto bg-gray-400 rounded-md mb-6 overflow-hidden transition-all`}
    >
      <figure className="w-full p-0 m-0 h-[12.5rem]">
        <SliderImages images={gamesData.short_screenshots} />
      </figure>
      <PlatformCardImages platforms={gamesData.parent_platforms} />
      <div className="flex items-center justify-between">
        <h4 className="text-blue-700">{gamesData.name}</h4>
        <Link className="bg-green-300 p-1" href={`/game/${gamesData.slug}`}>GO ---</Link>
      </div>
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
