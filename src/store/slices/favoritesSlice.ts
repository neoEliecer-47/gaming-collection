import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteGame {
    id: number;
    name: string;
    background_image: string;
}

interface FavoritesState {
    favoriteGames: FavoriteGame[]
}

const initialState: FavoritesState ={
    favoriteGames: []
}


const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavoriteGame: (state, action: PayloadAction<FavoriteGame>) => {
            state.favoriteGames.push(action.payload)
        },
        removeFavoriteGame: (state, action: PayloadAction<number>) => {
            state.favoriteGames = state.favoriteGames.filter(game => game.id !== action.payload)
        },
    }
})


export const { addFavoriteGame, removeFavoriteGame } = favoritesSlice.actions
export default favoritesSlice.reducer;

