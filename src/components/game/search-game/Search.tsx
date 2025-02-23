"use client";

import Delete from "@/components/icons/Delete";
import { fetchGamesByQuery } from "@/server/actions";
import { useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import GamesSearchedList from "./GamesSearchedList";

const Search = () => {
  const [gamesSearchedData, setGamesSearchedData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [gamesListOpen, setGamesListOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClearInput() {
    if (inputRef.current) {
      inputRef.current.value = "";
      setGamesListOpen(false);
    }
  }

  const handleSearch = useDebouncedCallback(async (term: string) => {
    if (term) {
      setGamesListOpen(true);
      setLoading(true);
      try {
        const gamesSearched = await fetchGamesByQuery(term);
        console.log(gamesSearched);
        setGamesSearchedData(gamesSearched?.data);
      } catch (error) {
        console.log(error);
        setGamesListOpen(false);
      } finally {
        setLoading(false);
      }
    } // } else {
    //   params.delete("query");
    //params.set("query", term);
    // }
    // replace(`${pathname}?${params.toString()}`);
    // console.log(pathname)
  }, 500);

  useEffect(() => {
    if (gamesListOpen) {
      document.body.classList.add("overflow-hidden", "h-screen");
    } else {
      document.body.classList.remove("overflow-hidden", "h-screen");
      //document.body.classList.add("scroll-smooth");
    }
    console.log('games list open',gamesListOpen)
    return () => document.body.classList.remove("overflow-hidden", "h-screen"); //clean up
  }, [gamesListOpen]);

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

      <div
        className={`fixed z-[999] top-7 ${
          gamesListOpen ? "block" : "hidden"
        } transition-opacity duration-300 left-[1.3rem] m-auto p-0 bg-blue-600 mt-10 h-[30rem] w-[90vw]`}
      >
        <button onClick={()=>setGamesListOpen(false)}>close</button>
        <GamesSearchedList
          loading={loading}
          games={gamesSearchedData}
          onClose={() => setGamesListOpen(false)}
        />
      </div>
    </div>
  );
};

export default Search;
