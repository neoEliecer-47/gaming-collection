import { fetchGames } from "@/helpers";
import { games } from "@/types";
import GamesCard from "./card/GamesCard";
import Pagination from "./Pagination";
import { mainPlatformsFilters } from "@/constants";


const GamesList = async ({ currentPage, searchParams }: { currentPage: number, searchParams: Record<string, string> }) => {
  const gamesData = await fetchGames(currentPage, searchParams);
  
  function buildTotalPages(){
    const totalPages = Math.ceil(gamesData.count / 20)
    return totalPages
  }
  
  function buildCurrentPage(){
    const { page } = searchParams
    const currentPage = Number(page) || 1
    return currentPage
  }

  function buildGamesCurrentTitle(){
    //console.log(searchParams)
    if(!searchParams.platforms) return 'All the games'
    const platformId = Number(searchParams.platforms)
    
    const mainPlatform = mainPlatformsFilters.find((platform) => (platform.id).toString() === searchParams.platforms)
    if(mainPlatform){
      return `Games for ${mainPlatform.name}`
    }
    // if(searchParams.platforms && mainPlatformsFilters.includes()) {
    //   const platform = mainPlatformsFilters.find((platform) => (platform.id).toString() === searchParams.platforms)?.name
    //   return `${platform} Games`
    // }sub

    for(const platform of mainPlatformsFilters){
      const subPlatform = platform.platforms?.find((sub)=> sub.id === platformId)?.name;
      console.log(subPlatform)
      if(subPlatform) {
        return `Games for ${subPlatform}`
      }
      
    }
    return "Games"
  }

  return (
    <div className="h-fit">
      <h1 className="text-2xl font-bold p-4 ">{buildGamesCurrentTitle()}</h1>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-0 m-auto">
        {gamesData.results.map((game: games) => (
          <GamesCard gamesData={game} />
        ))}
      </div>
      <Pagination currentPage={buildCurrentPage()} totalPages={buildTotalPages()} />
    </div>
  );
};

export default GamesList;

export const dynamic = "force-static"; //ensures that the page is statically generated at build time.

// <div
//  
//   style={{height: 300px; background-color: transparent, background-image: linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(`${}`), z-index: 1}}
// ></div>;
