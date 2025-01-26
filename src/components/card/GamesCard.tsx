"use client";

import { gamesCardProps } from "@/types";
import Image from "next/image";
import { useState } from "react";

const GamesCard = ({ gamesData }: gamesCardProps) => {
  const [moreDetailsShowed, setMoreDetailsShowed] = useState<boolean>(false);

  return (
    <section className={`w-full h-auto bg-gray-700 rounded-md mb-6 overflow-hidden transition-all ${moreDetailsShowed ? 'z-20' : 'z-0'}`}>
      <figure className="w-full h-[12.5rem]">
        <Image
          src={gamesData.background_image}
          alt={gamesData.name}
          className="w-full h-full"
          width={300}
          height={350}
          objectFit="contain"
        />
      </figure>
      <h4 className="text-white">{gamesData.name}</h4>
      <button onClick={()=> setMoreDetailsShowed(!moreDetailsShowed)}>{moreDetailsShowed ? "view less..." : "view more..."}</button>
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
