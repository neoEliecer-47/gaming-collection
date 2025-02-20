import Link from "next/link";
import User from "./icons/User";
import Search from "./game/search-game/Search";
import GamesSearchedList from "./game/search-game/GamesSearchedList";
import { fetchGamesSearchedByQuery } from "@/helpers";
import Modal from "./modal/Modal";
import Image, { StaticImageData } from "next/image";
import homeIcon from '../assets/home.avif'

const Header = async ({ searchParams }: { searchParams: string }) => {
  //console.log('HEADER',searchParams)
  const data = await fetchGamesSearchedByQuery(searchParams);
  //console.log('HEADER FATA',data)
  return (
    <>
      <div className="fixed inset-0 z-[100] flex w-full h-8">
        <header className="flex justify-center items-center backdrop-blur-[8px] gap-4 p-8 w-full h-8 bg-black/50 overflow-hidden border-none">
          <Link
            href="/"
            className=" bg-white/60 p-[0.10rem] shrink-0 h-8 w-8 rounded-md color-black text-sm"
            passHref
          >
            <Image src={homeIcon as StaticImageData} alt="home-icon" width={70} height={70} objectFit="contain" className="h-auto w-auto p-0 m-0"/>
          </Link>

          <Search />
          <div className="">
            <Link href="/user" className="p-0 m-0">
              <User size={9} className="w-[3rem] h-[2.5rem] text-white" />
            </Link>
          </div>
        </header>
        
        <Modal />
      </div>
      
      {data.results.length > 0 && searchParams && (
        <GamesSearchedList query={searchParams} games={data.results || []} /> //to prevent error when trying to loop games
      )}
      
    </>
  );
};

export default Header;
