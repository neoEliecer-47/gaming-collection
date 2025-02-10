import { fetchGames } from "@/helpers";
import { games } from "@/types";
import GamesCard from "./card/GamesCard";
import Pagination from "./Pagination";

const GamesList = async ({ currentPage, searchParams }: { currentPage: number, searchParams: Record<string, string> }) => {
  const gamesData = await fetchGames(currentPage, searchParams);
  
  function buildTotalPages(){
    const totalPages = Math.ceil(gamesData.count / 20)
    return totalPages
  }

  return (
    <div className="h-fit">
      <h1 className="text-2xl font-bold p-4 ">All the games</h1>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-0 m-auto">
        {gamesData.results.map((game: games) => (
          <GamesCard gamesData={game} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={buildTotalPages()} />
    </div>
  );
};

export default GamesList;

export const dynamic = "force-static"; //ensures that the page is statically generated at build time.

// <div
//  
//   style={{height: 300px; background-color: transparent, background-image: linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(`${}`), z-index: 1}}
// ></div>;
