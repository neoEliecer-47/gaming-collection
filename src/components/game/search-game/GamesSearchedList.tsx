"use client";

import PlatformCardImages from "@/components/card/PlatformCardImages";
import { gamesSearchedList } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    <div className="absolute z-[9999] m-auto p-4 bg-blue-600 h-[20rem] w-full overflow-y-scroll">
      {loadingGames ? (
        <p>loading...</p>
      ) : (
        <div>
            {games.length > 0 &&
            games.map(({ slug, name, background_image, platforms }) => (
              <div className="flex p-0 m-0">
                 <Image
                  src={background_image}
                  alt={'img'}
                  width={50}
                  height={50}
                  objectFit="cover"
                /> 
                <div>
                  
                  <h5>{name}</h5>
                </div>
              </div>
            ))} 
            
        </div>
      )}
    </div>
  );
};

export default GamesSearchedList;
