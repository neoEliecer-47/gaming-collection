import {
  mainCollectionsFilters,
  selectedGenresMenu,
  selectedPlatformsMenu,
} from "@/constants";
import GameCollectionMenu from "./GameCollectionMenu";
import Link from "next/link";
import UserAuth from "../auth/UserAuth";

const MenuGameCollections = () => {
  return (
    <div className="p-0 m-0">
      <div className="flex flex-col items-center gap-1 mb-4">
        <Link
          href="/?top_games=true"
          className="text-2xl text-white font-extrabold hover:text-green-400 transition-all duration-500 capitalize"
        >
          all time top 250
        </Link>
        <Link
          href="/"
          className="text-2xl text-white font-extrabold hover:text-green-400 transition-all duration-500 capitalize"
        >
          all the games
        </Link>
        <Link
          href="/?greatest_2025=true"
          className="text-2xl text-white font-extrabold hover:text-green-400 transition-all duration-500 capitalize"
        >
          upcoming games 2025
        </Link>
        <UserAuth />
      </div>
      <GameCollectionMenu
        collectionName="platforms"
        data={selectedPlatformsMenu}
      />
      <GameCollectionMenu collectionName="genres" data={selectedGenresMenu} />
      <GameCollectionMenu
        collectionName="collections"
        data={mainCollectionsFilters}
        viewAllCollections={false}
      />
    </div>
  );
};

export default MenuGameCollections;
