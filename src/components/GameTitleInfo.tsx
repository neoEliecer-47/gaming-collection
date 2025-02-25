import { fetchPlatforms } from "@/helpers"
import GameAbout from "./game/GameReadMore"

type dataProps = {
    name: string;
    description: string;
}

const GameTitleInfo =async ({ searchParams }: { searchParams: Record<string, string> }) => {

      const data = await fetchPlatforms(searchParams.platforms)
    
  return (
    <article>
   
             <h1>{data.name}</h1>
             <GameAbout description={data.description}/>
  
    </article>
  )
}

export default GameTitleInfo