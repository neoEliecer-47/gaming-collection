import Link from "next/link";
import User from "./icons/User";
import Search from "./game/search-game/Search";
import GamesSearchedList from "./game/search-game/GamesSearchedList";
import { fetchGamesSearchedByQuery } from "@/helpers";
import Menu from "./icons/Menu";
import Modal from "./modal/Modal";

const Header = async ({ searchParams }: { searchParams: string }) => {
  //console.log('HEADER',searchParams)
  const data = await fetchGamesSearchedByQuery(searchParams);
  //console.log('HEADER FATA',data)
  return (
    <div className="fixed inset-0 z-[100] flex w-full h-8">
      <header className=" flex justify-center items-center gap-4 p-8 w-full h-8 bg-black/50 overflow-hidden border-none">
        <Link
          href="/"
          className=" bg-gray-600 text-white p-[0.10rem] rounded-md color-black text-sm"
        >
          Gaming Library
        </Link>

        <Search />
        <div className=" flex">
          <Link href="/user" className="p-0 m-0">
            <User size={9} className="w-[3rem] h-[2.5rem]" />
          </Link>
        </div>
      </header>
      {data.results.length > 0 && searchParams && (
        <GamesSearchedList query={searchParams} games={data.results || []} /> //to prevent error when trying to loop games
      )}

      <Modal />
    </div>
  );
};

export default Header;
