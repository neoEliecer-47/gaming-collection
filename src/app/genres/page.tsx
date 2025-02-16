import CollectionCard from "@/components/card/CollectionCard"
import { fetchGamesCollection } from "@/helpers"
import { collectionProps } from "@/types"


const page = async () => {
  const genresData = await fetchGamesCollection('genres')
  //console.log(genresData.results)
  return (
    <div>
      <h1>genres</h1>
      {genresData.results.map((genres: collectionProps)=>(
        <CollectionCard collection={genres}/>
      ))}
    </div>
  )
}

export default page