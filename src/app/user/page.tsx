"use client";

import GamesCard from "@/components/card/GamesCard";
import Header from "@/components/Header";
import User from "@/components/icons/User";
import Navbar from "@/components/user/Navbar";
import { setFavoritesFromStorage } from "@/store/slices/favoritesSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const [activeOptionIndex, setactiveOptionIndex] = useState<number>(-1);
  const dispatch = useDispatch()
  const favoriteGames = useSelector((state: any) => state.favorites.favoriteGames)

    useEffect(()=> {
        if(typeof window !== 'undefined'){
            const storedFavorites = localStorage.getItem('favoriteGames')
            if(storedFavorites){
                dispatch(setFavoritesFromStorage(JSON.parse(storedFavorites)))
            }
        }
    }, [dispatch])

  return (
    <>
      <Header />
      <div className="px-2 bg-gray-500 w-full min-h-screen">
        <section className="w-full h-[10rem] flex flex-col gap-2 mb-4 items-center justify-center bg-green-500">
          <User size={20} className="w-[9.5rem]" />
          <span className="text-lg font-bold">User 47</span>
        </section>
        <div className="w-full h-full bg-orange-200">
          <Navbar
            activeOptionIndex={activeOptionIndex}
            updateOptionIndex={setactiveOptionIndex}
            titles={["Favorites", "Wishlist", "PLaylists"]}
          />
        </div>
        <section>
            {activeOptionIndex === -1 && (
                <div>
                    {favoriteGames.map((favGames: any)=>(
                        <GamesCard gamesData={favGames}/>
                    ))}
                </div>
            )}
        </section>
      </div>
    </>
  );
};

export default page;
