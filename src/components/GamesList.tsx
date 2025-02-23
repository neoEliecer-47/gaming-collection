import { fetchGames } from "@/helpers";
import { games } from "@/types";
import GamesCard from "./card/GamesCard";
import Pagination from "./Pagination";
import { mainPlatformsFilters } from "@/constants";
import { buildCollectionTitle, buildGamesCurrentTitle } from "@/utils";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

const GamesList = async ({
  currentPage,
  searchParams,
}: {
  currentPage: number;
  searchParams: Record<string, string>;
}) => {
  //if(Number(searchParams.page) > buildTotalPages()) return
  //let gamesData = []
  
    const gamesData = await fetchGames(currentPage, searchParams);
  
  if (!gamesData) {
    notFound();
  }
  function buildTotalPages() {
    const totalPages = Math.ceil(gamesData.count / 20);
    return totalPages;
  }

  //const MAX_CURRENT_PAGES: number = buildTotalPages()

  function buildCurrentPage() {
    const { page } = searchParams;
    const currentPage = Number(page) || 1;
    return currentPage;
  }

  const currentCollection =
    searchParams.platforms ||
    searchParams.developers ||
    searchParams.genres ||
    searchParams.stores ||
    searchParams.tags ||
    searchParams.publishers ||
    searchParams.platforms;
//console.log(currentCollection)

  return (
    <div className="h-fit">
      {currentCollection && (
        <h1 className="text-3xl text-center block p-2 pb-0 font-bold capitalize">
          {buildCollectionTitle(currentCollection)}
        </h1>
      )}
      <h1 className="text-2xl font-semibold p-4 text-center capitalize">
        {buildGamesCurrentTitle(searchParams)}
      </h1>
      <div className="grid place-items-center grid-cols-1 md:gap-4 w-fit h-fit md:grid-cols-2 lg:grid-cols-3 p-0 m-auto">
        {gamesData.results.map((game: games) => (
          <GamesCard gamesData={game} />
        ))}
      </div>
      <Pagination
        currentPage={buildCurrentPage()}
        totalPages={buildTotalPages()}
      />
    </div>
  );
};

export default GamesList;

export const dynamic = "force-static"; //ensures that the page is statically generated at build time.

// <div
//
//   style={{height: 300px; background-color: transparent, background-image: linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(`${}`), z-index: 1}}
// ></div>;
