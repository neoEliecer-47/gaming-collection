import { fetchGames } from "@/helpers";
import { games } from "@/types";
import GamesCard from "./card/GamesCard";
import Pagination from "./Pagination";

const GamesList = async ({ currentPage }: {currentPage: number}) => {
  const gamesData = await fetchGames(currentPage);
  return (
    <div className="h-fit">
      <h1 className="text-2xl font-bold p-4 ">All the games</h1>
      {gamesData.results.map((game: games) => (
        <GamesCard gamesData={game} />
      ))}
      <Pagination currentPage={currentPage} totalPages={40}/>
    </div>
  );
};

export default GamesList;

export const dynamic = "force-static"; //ensures that the page is statically generated at build time.
