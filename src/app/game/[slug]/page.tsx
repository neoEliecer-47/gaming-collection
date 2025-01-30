import GameDetails from "@/components/game/GameDetails"
import { fetchGameDetails } from "@/helpers"


const GamePage = async ({ params }: { params: { slug: string } }) => {
  const gameDetailsData = await fetchGameDetails(params.slug)
  return (
    <GameDetails gameDetailsData={gameDetailsData}/>
  )
}

export default GamePage