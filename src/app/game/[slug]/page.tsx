import GameDetails from "@/components/game/GameDetails"
import { fetchGameDetails } from "@/helpers"
import { Suspense } from "react"


const GamePage = async ({ params }: { params: { slug: string } }) => {
  const gameDetailsData = await fetchGameDetails(params.slug)
  return (
    <Suspense fallback={<p>loading...</p>}>
    <GameDetails gameDetailsData={gameDetailsData}/>
    </Suspense>
  )
}

export default GamePage