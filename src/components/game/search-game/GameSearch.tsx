import { fetchGamesSearchedByQuery } from "@/helpers";
import Search from "./Search";



const GameSearch = async ({ query }: { query: string }) => {
    //const data = await fetchGamesSearchedByQuery(query)
    //console.log('games searched',data)
     
   return (
     <div className="p-0 m-0">
          <Search />
     </div>
   )
 }
 
 export default GameSearch