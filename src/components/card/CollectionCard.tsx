'use client'

import React from 'react'
import { collectionProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import UserCollection from "../icons/UserCollection";
import { useState } from "react";
import ImageSkeleton from "./skeletons/ImageSkeleton";

const CollectionCard = ({ collectionData, collectionType, index }: { collectionData: collectionProps, collectionType: string, index: number }) => {
  //const currentPathname = usePathname()
  //const pathname = currentPathname.split('/')[1]
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const getClassNames = (index: number) => {
    return index % 6 === 0
      ? "col-span-2 row-span-2"
      : "col-span-1 row-span-1";
  };

  return (
    <div 
    key={collectionData.id}
    className={`${getClassNames(index)} animate-fadeIn`}
    style={{
      animationDelay: `${index * 50}ms`,
      animationDuration: "300ms",
      animationFillMode: "backwards",
    }}>
    <div className="relative p-2 w-full h-full mb-2 overflow-hidden rounded-lg">
        {!isImageLoaded && <ImageSkeleton />}
      <div className="absolute inset-0 m-2 rounded-lg">
        <Image
          src={collectionData.image_background}
          alt={collectionData.slug}
          fill
          quality={100}
          className="w-full h-full aspect-video z-[-1] rounded-lg object-fill"
          loading="eager"
          onLoad={()=>setIsImageLoaded(!isImageLoaded)}
        />
      </div>
      <div className="absolute m-2 inset-0 bg-gradient-to-t from-black/95 to-black/35 z-[1] rounded-lg" />
      <section className="w-full relative z-[2] h-[50%] flex flex-col items-center justify-center">
        <h1 className="text-white text-2xl font-bold relative top-0 right-0 z-[2] underline underline-offset-[6px] decoration-solid decoration-[0.5px] decoration-white/55">
          {collectionData.name}
        </h1>
        <Link
          href={`/?${collectionType}=${collectionType === "platforms" || collectionType === 'stores' ? collectionData.id : collectionData.slug}`}
          className="px-6 py-2 mt-[1.7rem] flex justify-center items-center rounded-md text-white bg-white/20 hover:bg-green-600/50 transition-all duration-200 backdrop-blur-[2px]"
        >
          Games
        </Link>
      </section>

      <article className="p-0 m-0 relative z-[1] mx-6">
        <section className="flex items-center justify-between border-b-[1px] border-white/25 pb-1">
          <h1 className="text-white capitalize text-xl font-semibold">
            popular games
          </h1>
          <span className="text-white font-semibold">
            {collectionData.games_count}
          </span>
        </section>

        <section className="gap-2">
          {collectionData.games.slice(0, 3).map((game) => (
            <div className="flex items-center justify-between">
              <Link href={`/game/${game.slug}`} className="p-0 m-0 text-white underline">{game.name}</Link>
              <div className="flex items-center">
                <span className="text-white/40">{game.added}</span>
                <UserCollection />
              </div>
            </div>
          ))}
        </section>
      </article>
    </div>
    </div>
  );
};

export default React.memo(CollectionCard);
