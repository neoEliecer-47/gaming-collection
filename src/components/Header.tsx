import Link from "next/link";
import User from "./icons/User";
import Search from "./game/search-game/Search";
import GamesSearchedList from "./game/search-game/GamesSearchedList";
import { fetchGamesSearchedByQuery } from "@/helpers";



const Header =async ({ searchParams }: { searchParams: string }) => {
  console.log('HEADER',searchParams)
  const data = await fetchGamesSearchedByQuery(searchParams)
  console.log('HEADER FATA',data)
    return (
      <>
      <header className="backdrop-blur-[2px] flex justify-center items-center gap-4 p-8 w-full h-8 bg-transparent">
        <Link href='/' className=" m-4 bg-gray-600 text-white p-[0.10rem] rounded-md color-black text-sm">
          Gaming Library
        </Link>
       
       <Search />
        <Link href='/user' className="p-0 m-0">
          <User size={9} className="w-[3rem] h-[2.5rem]"/>
        </Link>
      </header>
      {data.results.length > 0 && (
        <GamesSearchedList query={searchParams} games={data.results}/>//to prevent error when trying to loop games
      )}
      </>
    );
  };
  
  export default Header;