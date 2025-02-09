"use client";

import PlatformCardImages from "@/components/card/PlatformCardImages";
import { gamesSearchedList } from "@/types";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import emptyImageGame from '../../../assets/game.avif'

interface gamesSearchedListProps {
  query: string;
  games: gamesSearchedList[];
}

const GamesSearchedList = ({ games, query }: gamesSearchedListProps) => {
  const [loadingGames, setLoadingGames] = useState<boolean>(false);
  console.log(games);
  useEffect(() => {
    if (query) {
      setLoadingGames(true);
      const timeout = setTimeout(() => {
        setLoadingGames(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [query]);


  if (!query) return 'null f';

  return (
    <div className="absolute z-[9999] m-auto p-4 bg-blue-600 h-auto w-full overflow-y-scroll">
      {loadingGames ? (
        <p>loading...</p>
      ) : (
        <div className="">
            {games.length > 0 ?
            games.map(({ slug, name, background_image, parent_platforms }, index) => (
              <Link href={`/game/${slug}`} className="flex gap-2 mb-1 rounded-md p-2 bg-white/50 m-0">
                 <Image
                  src={background_image || emptyImageGame as StaticImageData}
                  alt={slug}
                  width={50}
                  height={50}
                  quality={40}
                  objectFit="cover"
                  className="w-auto h-auto"
                  loading='eager'
                /> 
                <div className="flex justify-center items-center">
                  {/* <PlatformCardImages platforms={parent_platforms}/> */}
                  <h5>{name}</h5>
                </div>
              </Link>
            )) : <p>No results</p>} 
            
        </div>
      )}
    </div>
  );
};

export default GamesSearchedList;
