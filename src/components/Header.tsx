import Link from "next/link";
import User from "./icons/User";
import Search from "./game/search-game/Search";
import GamesSearchedList from "./game/search-game/GamesSearchedList";
import { fetchGamesSearchedByQuery } from "@/helpers";
import Modal from "./modal/Modal";
import Image, { StaticImageData } from "next/image";
import homeIcon from '../assets/home.avif'

const Header = async ({ fixed = true }: { fixed?: boolean }) => {
  //console.log('HEADER',searchParams)
  //const data = await fetchGamesSearchedByQuery(searchParams);
  //console.log('HEADER FATA',data)
  return (
   
      <div className={`${fixed ? 'fixed' : 'block'} z-[100] flex w-full h-8`}>
        <header className="flex justify-center items-center backdrop-blur-[8px] gap-4 p-8 w-[90%] md:w-full h-8 bg-black/50 clip-path-inset-0 border-none">
          <Link
            href="/"
            className=" bg-white/60 p-[0.10rem] shrink-0 h-8 w-8 rounded-md color-black text-sm"
            passHref
          >
            <Image src={homeIcon as StaticImageData} alt="home-icon" width={70} height={70} objectFit="contain" className="h-auto w-auto p-0 m-0"/>
          </Link>

          <Search />
          
            <Link href="/user" className="p-0 m-0">
              <User size={7} className=" p-0 m-0 text-white w-auto" />
            </Link>
         
        </header>
        
        <Modal />
      </div>
      
      
        
   
      
  
  );
};

export default Header;
