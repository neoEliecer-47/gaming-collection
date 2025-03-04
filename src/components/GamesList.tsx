import { fetchGames, fetchTopGames } from "@/helpers";
import { games } from "@/types";
import GamesCard from "./card/GamesCard";
import Pagination from "./Pagination";
import { notFound } from "next/navigation";


const GamesList = async ({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) => {
  //if(Number(searchParams.page) > buildTotalPages()) return
  //let gamesData = []
  console.log(searchParams);
  const gamesData = !searchParams.top_games && !searchParams.greatest_2025 ? await fetchGames(searchParams) : await fetchTopGames(searchParams)

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

  return (
    <div className="h-fit">
      {/* {currentCollection && (
        <h1 className="text-3xl text-center block p-2 pb-0 font-bold capitalize">
          {buildCollectionTitle(currentCollection)}
        </h1>
      )} */}

      <div className="md:max-h-[100vh] h-full pb-[4rem]">
        <div
          className="grid place-items-center grid-cols-1 md:gap-4 w-fit h-full overflow-y-scroll md:grid-cols-2 lg:grid-cols-3 px-4 m-auto py-8 bg-black/10  rounded-tr-2xl rounded-tl-2xl"
          style={{ boxShadow: "0 -1px 10px 1px #000" }}
        >
          {gamesData.results.map((game: games) => (
            <GamesCard gamesData={game} />
          ))}
        </div>
      <Pagination
        currentPage={buildCurrentPage()}
        totalPages={buildTotalPages()}
      />
      </div>
    </div>
  );
};

export default GamesList;

export const dynamic = "force-static"; //ensures that the page is statically generated at build time.

// <div
//
//   style={{height: 300px; background-color: transparent, background-image: linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(`${}`), z-index: 1}}
// ></div>;
