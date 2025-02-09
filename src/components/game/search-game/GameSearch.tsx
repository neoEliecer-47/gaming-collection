import { fetchGamesSearchedByQuery } from "@/helpers";
import Search from "./Search";
import GamesSearchedList from "./GamesSearchedList";



const GameSearch = async ({ query }: { query: string }) => {
   console.log('gamessearch', query)
    // const data = await fetchGamesSearchedByQuery(query)
    //console.log('games searched',data)
     
   return (
     <div className=" p-0 m-0">
          
        
        <div className="">
        
        </div>
          
     </div>
   )
 }
 
 export default GameSearch