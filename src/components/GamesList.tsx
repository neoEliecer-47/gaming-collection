import { fetchGames } from "@/helpers";
import { games } from "@/types";
import GamesCard from "./card/GamesCard";

const GamesList = async () => {
  const gamesData = await fetchGames();
  return (
    <div>
        <h1 className="text-2xl font-bold p-4 ">All the games</h1>
      {gamesData.results.map((game: games) => (
        <GamesCard gamesData={game} />
      ))}
    </div>
  );
};

export default GamesList;
