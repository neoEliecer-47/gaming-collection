import Link from "next/link";
import User from "./icons/User";
import GameSearch from "./game/search-game/GameSearch";


const Header = () => {
    return (
      <header className="backdrop-blur-[2px] flex justify-center items-center gap-4 p-8 w-full h-8 bg-transparent overflow-hidden ">
        <Link href='/' className=" m-4 bg-gray-600 text-white p-[0.10rem] rounded-md color-black text-sm">
          Gaming Library
        </Link>
       <GameSearch />
        <Link href='/user' className="p-0 m-0">
          <User size={9} className="w-[3rem] h-[2.5rem]"/>
        </Link>
      </header>
    );
  };
  
  export default Header;