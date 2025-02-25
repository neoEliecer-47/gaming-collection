"use client";

import PlatformCardImages from "@/components/card/PlatformCardImages";
import { gamesSearchedList } from "@/types";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import emptyImageGame from "../../../assets/game.avif";
import LoadingGameLists from "@/components/card/skeletons/LoadingGameLists";

interface gamesSearchedListProps {
  loading: boolean;
  games: gamesSearchedList[];
  onClose: () => void;
}

const GamesSearchedList = ({
  games,
  loading,
  onClose,
}: gamesSearchedListProps) => {
  //const [loadingGames, setLoadingGames] = useState<boolean>(false);

  console.log("games searched", games);
  // useEffect(() => {
  //   if (query) {
  //     setLoadingGames(true);
  //     const timeout = setTimeout(() => {
  //       setLoadingGames(false);
  //     }, 2000);

  //     return () => clearTimeout(timeout);
  //   }
  // }, [query]);

  return (
    <div
      className="absolute z-[99] inset-0 m-auto p-4 overflow-hidden bg-black/70 backdrop-invert-[70%] mt-16 h-auto w-full overflow-y-scroll rounded-b-md"
      style={{ scrollbarWidth: "none" }}
    >
      {loading ? (
        <div className="flex justify-center items-center">
          <LoadingGameLists />
        </div>
      ) : (
        <div className="">
          {games.length > 0 ? (
            games.map(
              ({ slug, name, background_image, parent_platforms }, index) => (
                <Link
                  href={`/game/${slug}`}
                  onClick={onClose}
                  className="flex gap-2 mb-1 h-[4.5rem] w-full rounded-md p-2 bg-white/70 m-0"
                  passHref
                  key={index}
                >
                  <Image
                    src={
                      background_image || (emptyImageGame as StaticImageData)
                    }
                    alt={slug}
                    width={50}
                    height={200}
                    quality={60}
                    className="h-full max-w-[3.5rem] aspect-video object-cover rounded-md"
                    priority
                    loading="eager"
                  />

                  <div className="flex flex-col justify-center items-start overflow-hidden">
                    <PlatformCardImages platforms={parent_platforms} />
                    <h5 className="whitespace-nowrap overflow-hidden text-ellipsis w-[14.5rem] md:w-full">
                      {name}
                    </h5>
                  </div>
                </Link>
              )
            )
          ) : (
            <p>No results</p>
          )}
        </div>
      )}
    </div>
  );
};

export default GamesSearchedList;
