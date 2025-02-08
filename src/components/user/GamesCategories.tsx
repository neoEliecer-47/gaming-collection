'use client'

import { setFavoritesFromStorage } from "@/store/slices/favoritesSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import GamesCard from "../card/GamesCard";


const GamesCategories = () => {

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
    <div className="p-0 m-0">
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
  )
}

export default GamesCategories