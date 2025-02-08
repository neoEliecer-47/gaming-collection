import PlatformCardImages from "@/components/card/PlatformCardImages";
import { gamesSearchedList } from "@/types";


interface gamesSearchedListProps {
    query?: string;
    games?: gamesSearchedList[]
}


const GamesSearchedList = ({ games, query }: gamesSearchedListProps) => {
    //console.log('games searched list',games)
  return (
   
        <div className="fixed z-[9999] m-auto p-4 bg-blue-600 h-[20rem] w-full">
        {/* {games.length > 0 && games.map(({ slug, name, background_image, platforms })=> (
            <Link href={`/game/${slug}`} className="flex p-0 m-0">
                <Image src={background_image} alt={slug} width={50} height={50} objectFit="cover" />
                <div>
                    <PlatformCardImages platforms={platforms}/>
                    <h5>{name}</h5>
                </div>
            </Link>
        ))} */}
        <h1 className="text-wihte text-lg">games searched</h1>
    </div>
 
  )
}

export default GamesSearchedList