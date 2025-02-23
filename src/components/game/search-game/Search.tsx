"use client";

import Delete from "@/components/icons/Delete";
import { fetchGamesByQuery } from "@/server/actions";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import GamesSearchedList from "./GamesSearchedList";

const Search = () => {
  const [gamesSearchedData, setGamesSearchedData] = useState([])
  const [loading, setLoading] = useState<boolean>(false)
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const params = new URLSearchParams(searchParams);

  function handleClearInput() {
    if (inputRef.current) {
      params.delete("query");
      inputRef.current.value = "";
      replace(`${pathname}?${params.toString()}`);
    }
  }

  const handleSearch = useDebouncedCallback(async(term: string) => {
    if (term) {
      setLoading(true)
        try {
          const gamesSearched = await fetchGamesByQuery(term)
          console.log(gamesSearched)
          setGamesSearchedData(gamesSearched?.data)
        } catch (error) {
          console.log(error)
        }finally{
          setLoading(false)
        }
    
    
    }// } else {
      //   params.delete("query");
      //params.set("query", term);
    // }
    // replace(`${pathname}?${params.toString()}`);
    // console.log(pathname)
  }, 500);

  return (
    <div className="relative p-0 m-0">
      <input
        type="text"
        ref={inputRef}
        placeholder="Search game..."
        className=" p-[0.3rem] m-0 max-w-[12rem] rounded-lg bg-white/90 backdrop-blur-[3px] border-[1px] border-gray-400 text-black focus:border-green-600 focus:border-[2px] focus:outline-none"
        
        onChange={(e) => handleSearch(e.target.value)}
      />
      
      <button
        onClick={handleClearInput}
        className="absolute overflow-hidden w-6 h-6 leading-none flex-shrink-0 flex items-center justify-center rounded-full top-[0.40rem] right-2 bg-green-600 text-md p-0 m-0 text-justify border-none focus:outline-none text-white"
      >
        <Delete />
      </button>
     
      <div className="fixed z-[999] top-7 left-[1.3rem] m-auto p-4 bg-blue-600 mt-10 h-[10rem] w-[90vw]" >
        {loading && 
          <p>loading...</p>
        }
        {<div>data</div>}
      </div>
    </div>
  );
};

export default Search;
