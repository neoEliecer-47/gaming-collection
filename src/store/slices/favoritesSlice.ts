import { FavoriteGameSlice } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



export interface FavoritesState {
    favoriteGames: FavoriteGameSlice[]
}

const initialState: FavoritesState ={
    favoriteGames: []
}


const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setFavoritesFromStorage: (state, action: PayloadAction<FavoriteGameSlice[]>)=>{
            state.favoriteGames = action.payload
        },
        addFavoriteGame: (state, action: PayloadAction<FavoriteGameSlice>) => {
            state.favoriteGames.push(action.payload)
            if(typeof window !== 'undefined'){
                // const favGamesInLocalStorage = JSON.parse(localStorage.getItem('favoriteGames'))
                // if(favGamesInLocalStorage){
                //     const findGameInStorage = favGamesInLocalStorage.some((game)=>game.id === action.payload.id)
                //     if(findGameInStorage) {
                     
                //         const newFavGamesArray = favGamesInLocalStorage.filter((game)=>game.id !== action.payload.id)
                //         newFavGamesArray.length === 0 ? localStorage.removeItem('favoriteGames') : localStorage.setItem('favoriteGames', JSON.stringify(newFavGamesArray))
                        
                //         return
                //     }
                // }

                    localStorage.setItem('favoriteGames', JSON.stringify(state.favoriteGames)) //save to local storage
                
            }
        },
        removeFavoriteGame: (state, action: PayloadAction<number>) => {
            state.favoriteGames = state.favoriteGames.filter(game => game.id !== action.payload)
            if(typeof window !== 'undefined'){
                localStorage.setItem('favoriteGames', JSON.stringify(state.favoriteGames))
            }
        },
    }
})


export const { addFavoriteGame, removeFavoriteGame, setFavoritesFromStorage } = favoritesSlice.actions
export default favoritesSlice.reducer;

