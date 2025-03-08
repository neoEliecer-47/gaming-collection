"use client";

import Delete from "@/components/icons/Delete";
import { fetchGamesByQuery } from "@/server/actions";
import { useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import GamesSearchedList from "./GamesSearchedList";
import { useClickOutsideDetector } from "@/hooks/useClickOutsideDetector";
import LoadingSpinner from "@/components/card/skeletons/LoadingSpinner";

const Search = () => {
  const [gamesSearchedData, setGamesSearchedData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [gamesListOpen, setGamesListOpen] = useState<boolean>(false);
  const [gamesSearchedAmount, setGamesSearchedAmount] = useState<number>(0)
  const [isFading, setIsFading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { dropMenuRef, isClickOutside, setIsClickOutside } = useClickOutsideDetector()


  function handleClearInput() {
    if (inputRef.current) {
      inputRef.current.value = "";
      //setGamesListOpen(false);
    }
  }

  const handleSearch = useDebouncedCallback(async (term: string) => {
    if (term) {
      setGamesListOpen(true);
      setIsFading(false);
      setLoading(true);
      try {
        const gamesSearched = await fetchGamesByQuery(term);
        console.log(gamesSearched);
        setGamesSearchedData(gamesSearched?.data);
        setGamesSearchedAmount(gamesSearched?.count);
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
  }, 600);

  const handleCloseGamesList = () => {
    setIsFading(true);
    setTimeout(() => {
      setGamesListOpen(false);
    }, 250);
  };

  // useEffect(() => {
  //   if (gamesListOpen) {
  //     document.body.classList.add("overflow-hidden", "h-screen");
  //   } else {
  //     document.body.classList.remove("overflow-hidden", "h-screen");
  //     //document.body.classList.add("scroll-smooth");
  //   }
  //   console.log("games list open", gamesListOpen);
  //   return () => document.body.classList.remove("overflow-hidden", "h-screen"); //clean up
  // }, [gamesListOpen]);

    useEffect(() => {
      if (isClickOutside) {
        handleCloseGamesList()
        setIsClickOutside(false);
      }
    }, [isClickOutside]); //to handle and close it when user clicks outside the element

  return (
    <div className="relative p-0 m-0 bg-transparent" ref={dropMenuRef}>
      <input
        type="text"
        ref={inputRef}
        placeholder="Search game..."
        className=" p-[0.3rem] m-0 w-[14rem] max-w-[20rem] lg:min-w-[40rem] rounded-lg bg-white/90 backdrop-blur-[3px] border-[1px] border-gray-400 text-black focus:border-green-600 focus:border-[2px] focus:outline-none"
        onChange={(e) => handleSearch(e.target.value)}
        onClick={() => {
          if (inputRef.current && inputRef.current.value) {
            setGamesListOpen(true);
            setIsFading(false);
          }
        }}
      />

      <button
        onClick={handleClearInput}
        className="absolute w-6 h-6 leading-none flex-shrink-0 flex items-center justify-center rounded-full top-[0.40rem] right-2 bg-green-600 text-md p-0 m-0 text-justify border-none focus:outline-none text-white"
      >
        <Delete />
      </button>

      <div
        className={`fixed z-[999] top-7 p-4 md:inset-0 md:mt-14 transition-opacity duration-[250ms] left-[1.3rem] m-auto md:max-w-[50rem] mt-10 h-[30rem] rounded-md w-[90vw]
        ${gamesListOpen ? " opacity-100 backdrop-blur-lg overflow-hidden bg-black/80" : "opacity-0 hidden"} ${
          isFading ? "animate-fadeOut" : "animate-fadeIn"
        }`}
        
      >
        <section className="flex items-center justify-between text-white text-lg">
        <div className="flex gap-2"><h1 className="font-bold text-white m-0 p-0">Games Related</h1> {loading ? <div className="flex items-center justify-center"><LoadingSpinner /></div> : gamesSearchedAmount}</div>
        {!loading && <button onClick={handleCloseGamesList} className="bg-green-600 rounded-full"><Delete /></button>}
        </section>
       
        <GamesSearchedList
          loading={loading}
          games={gamesSearchedData}
          onClose={handleCloseGamesList}
        />
        
      </div>
    </div>
  );
};

export default Search;
