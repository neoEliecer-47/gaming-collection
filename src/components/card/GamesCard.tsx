"use client";

import { gamesCardProps } from "@/types";

import { useEffect, useMemo, useState } from "react";
import PlatformCardImages from "./PlatformCardImages";
import SliderImages from "./SliderImages";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteGame, FavoriteGame, removeFavoriteGame, setFavoritesFromStorage } from "@/store/slices/favoritesSlice";
import LoadingSpinner from "./skeletons/LoadingSpinner";
import Star from "../icons/Star";
import Wish from "../icons/Wish";
import More from "../icons/More";

const GamesCard = ({ gamesData }: gamesCardProps) => {
  const [moreDetailsShowed, setMoreDetailsShowed] = useState<boolean>(false);
  const [isFavoriteGameLoading, setIsFavoriteGameLoading] = useState<boolean>(true)
  const dispatch = useDispatch()
  const favoriteGames = useSelector((state: any)=> state.favorites.favoriteGames)
  

  const isFavorite = useMemo(()=> {//for better performance
    return favoriteGames.some((game: FavoriteGame)=> game.id === gamesData.id)
  }, [favoriteGames])

  function handleAddFavorite(){
    const { id, name, background_image } = gamesData
    if(isFavorite){
      dispatch(removeFavoriteGame(id))
      return
    }
    dispatch(addFavoriteGame({ id, name, background_image }))
  }

  useEffect(()=>{
   
    if(typeof window !== 'undefined'){
      const storedFavorites = localStorage.getItem('favoriteGames')
      if(storedFavorites){
        dispatch(setFavoritesFromStorage(JSON.parse(storedFavorites)))
      }
      setIsFavoriteGameLoading(false)
    }
  }, [isFavorite])


  return (
    <section
      className={`w-[22rem] h-auto bg-gray-800 rounded-md mb-6 overflow-hidden transition-all select-none`}
    >
      <figure className="w-[22rem] p-0 m-0 h-[12.5rem]">
        <SliderImages images={gamesData.short_screenshots} />
      </figure>
      <div className="flex p-0 m-0 items-center justify-start gap-1">
        <PlatformCardImages platforms={gamesData.parent_platforms} />
        <button onClick={handleAddFavorite} className={`p-1 text-white rounded-md bg-white/10`}>
          {isFavoriteGameLoading ? <LoadingSpinner /> : <Star fill={isFavorite && '#FFD700'}/>}
        </button>
        <button className="p-1 text-white rounded-md bg-white/10">
          <Wish />
        </button>
        <button className="p-1 text-white rounded-md bg-white/10">
          <More />
        </button>
      </div>
      <div className="flex items-center justify-between">
        <h4 className="text-white">{gamesData.name}</h4>
        <Link className="bg-green-300 p-1" href={`/game/${gamesData.slug}`}>
          GO--
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
