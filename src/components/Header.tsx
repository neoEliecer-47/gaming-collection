import Link from "next/link";
import User from "./icons/User";
import Search from "./game/search-game/Search";
import GamesSearchedList from "./game/search-game/GamesSearchedList";



const Header = ({ searchParams }: { searchParams: string }) => {
  console.log('header', searchParams)
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
      {searchParams && (
        <GamesSearchedList />
      )}
      </>
    );
  };
  
  export default Header;