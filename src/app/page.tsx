import GamesCard from "@/components/card/GamesCard";
import { fetchGames } from "@/helpers";
import { games } from "@/types";
import { Suspense } from "react";


export default async function Home() {

   const gamesData = await fetchGames()
 console.log(gamesData)
  return (
    <main>
     {gamesData.results.map((game: games) => (
        <Suspense fallback={<p>Loading...</p>}>
          <GamesCard gamesData={game}/>
        </Suspense>
      )
     )}
    </main>
  );
}

export const dynamic = 'force-static'//ensures that the page is statically generated at build time.
