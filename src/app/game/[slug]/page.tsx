import GameDetails from "@/components/game/GameDetails"
import { fetchGameDetails } from "@/helpers"
import { Suspense } from "react"

export const dynamic = 'auto'; //it allows new game pages to be generated

export async function generateStaticParams() {
  const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}&page=1`)
  const data = await res.json()
  //console.log('staticParams',data)
  return data.results.map((game: any)=>({
    slug: game.slug
  }))
}

const GamePage = async ({ params }: { params: { slug: string } }) => {
  const gameDetailsData = await fetchGameDetails(params.slug)
  return (
    <Suspense fallback={<p>loading...</p>}>
      <GameDetails gameDetailsData={gameDetailsData}/>
    </Suspense>
  )
}

export default GamePage