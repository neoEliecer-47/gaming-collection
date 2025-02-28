"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import ArrowY from "../icons/ArrowY";
import ArrowRightIcon from "../icons/ArrowNext";

type GameCollectionMenuProps = {
  collectionName: string;
  data: Array<{
    name: string;
    slug: string;
    imgSrc: StaticImageData;
    id: number;
  }>;
};

const GameCollectionMenu = ({
  collectionName,
  data,
}: GameCollectionMenuProps) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  return (
    <div>
      <h2 className="text-2xl font-extrabold mb-2 capitalize text-white">{collectionName}</h2>
      <section
        className="flex flex-col items-start gap-2 bg-black/45 overflow-hidden transition-all duration-300"
        style={{ maxHeight: `calc(${!showAll ? "3" : data.length} * 2.2rem)` }}
       
      >
        {data.map((game) => (
          <Link
            href={`/?${collectionName}=${game.id}`}
            key={game.slug}
            className="flex gap-2 justify-center items-center h-7 cursor-pointer group"
          >
            <figure className="p-[0.30rem] m-0 w-7 h-7 bg-purple-300 transition-all duration-200 group-hover:bg-white rounded-md">
              <Image
                src={game.imgSrc}
                alt={game.name}
                width={50}
                height={50}
                className="h-full w-full object-cover aspect-video"
              />
            </figure>
            <p className="text-white capitalize">{game.name}</p>
          </Link>
        ))}
      </section>
      <div className="flex justify-between items-center w-full gap-2">
        <button
          className="bg-purple-700 text-white"
          onClick={() => setShowAll(!showAll)}
        >
          <ArrowY
            className={!showAll ? "w-[1.8rem]" : "rotate-180 w-[1.8rem]"}
            duration={1}
            strokeWidth={3}
          />
        </button>
        {showAll && (
          <Link
            href={`/collections/${collectionName}`}
            className={`bg-orange-500 text-white transition-all flex gap-1 px-1 group min-w-max pr-2 ${
              !showAll ? "animate-fadeOut" : "animate-fadeIn"
            }`}
            style={{ animationDuration: "1s" }}
          >
            <span className="capitalize">all {collectionName}</span>
            <ArrowRightIcon strokeWidth={3} className="relative left-0 group-hover:left-2"/>
          </Link>
        )}
      </div>
    </div>
  );
};

export default GameCollectionMenu;
