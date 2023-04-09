import { createSlice } from "@reduxjs/toolkit";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonState {
  favoritePokemons: Pokemon[];
}

export const slice = createSlice({
  name: "pokemon",
  initialState: {
    favoritePokemons: [] as Pokemon[],
  },
  reducers: {
    favoritePokemon(state, { payload }) {
      return {
        ...state,
        favoritePokemons: [...state.favoritePokemons, payload],
      };
    },
    unfavoritePokemon(state, { payload }) {
      return {
        ...state,
        favoritePokemons: state.favoritePokemons.filter((pokemon) => pokemon.url !== payload.url),
      };
    },
  },
});

export const { favoritePokemon, unfavoritePokemon } = slice.actions;

export const selectPokemon = (state: { pokemon: PokemonState }) => state.pokemon.favoritePokemons;

export default slice.reducer;
