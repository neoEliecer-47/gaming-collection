"use client";

import { gamesCardProps } from "@/types";

import { useEffect, useMemo, useState } from "react";
import PlatformCardImages from "./PlatformCardImages";
import SliderImages from "./SliderImages";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteGame, setFavoritesFromStorage } from "@/store/slices/favoritesSlice";
import LoadingSpinner from "./skeletons/LoadingSpinner";

const GamesCard = ({ gamesData }: gamesCardProps) => {
  const [moreDetailsShowed, setMoreDetailsShowed] = useState<boolean>(false);
  const [isFavoriteGameLoading, setIsFavoriteGameLoading] = useState<boolean>(true)
  const dispatch = useDispatch()
  const favoriteGames = useSelector((state: any)=> state.favorites.favoriteGames)
  

  const isFavorite = useMemo(()=> {
    return favoriteGames.some((game)=> game.id === gamesData.id)
  }, [favoriteGames])

  function handleAddFavorite(){
    const { id, name, background_image } = gamesData
   
    dispatch(addFavoriteGame({ id, name, background_image }))
  }

  useEffect(()=>{
   
    if(typeof window !== 'undefined'){
      console.log('here ')
      const storedFavorites = localStorage.getItem('favoriteGames')
      if(storedFavorites){
        dispatch(setFavoritesFromStorage(JSON.parse(storedFavorites)))
      }
      setIsFavoriteGameLoading(false)
    }
  }, [dispatch])


  return (
    <section
      className={`w-[22rem] h-auto bg-gray-400 rounded-md mb-6 overflow-hidden transition-all select-none`}
    >
      <figure className="w-[22rem] p-0 m-0 h-[12.5rem]">
        <SliderImages images={gamesData.short_screenshots} />
      </figure>
      <div className="flex p-0 m-0 items-center justify-start gap-2">
        <PlatformCardImages platforms={gamesData.parent_platforms} />
        <button onClick={handleAddFavorite} className={`p-1 text-white rounded-md ${isFavorite ? 'bg-red-500' : 'bg-blue-500'}`}>
          {isFavoriteGameLoading ? <LoadingSpinner /> : <p>fav</p>}
          {/* {isFavorite ? 'Favorites' : 'FFF'} */}
        </button>
      </div>
      <div className="flex items-center justify-between">
        <h4 className="text-blue-700">{gamesData.name}</h4>
        <Link className="bg-green-300 p-1" href={`/game/${gamesData.slug}`}>
          GO ---
        </Link>
      </div>
      <button onClick={() => setMoreDetailsShowed(!moreDetailsShowed)}>
        {moreDetailsShowed ? "view less..." : "view more..."}
      </button>
      {moreDetailsShowed && (
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At impedit
            animi nam voluptates. Repellat ipsam iste rem facere, ducimus
            expedita! Repudiandae libero ducimus, esse voluptatem quibusdam ab
            quaerat placeat totam.
          </p>
        </div>
      )}
    </section>
  );
};

export default GamesCard;
