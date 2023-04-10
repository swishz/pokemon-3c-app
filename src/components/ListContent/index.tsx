import CardContent from "../CardContent/index";
import "./listContent.css";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

interface Pokemon {
  name: string;
  url: string;
}

function ListContent() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const favoritePokemons = useSelector(
    (state: { pokemon: { favoritePokemons: Pokemon[] } }) => state.pokemon.favoritePokemons
  );

  useEffect(() => {
    const axiosPokemons = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      setPokemonList(response.data.results);
    };
    axiosPokemons();
  }, []);

  return (
    <Flex className="container" flexDirection="row">
      <Box className="pokemon-list" width="50%">
        <Text className="favorite-title">POKÉMONS</Text>
        <SimpleGrid
          className="grid-container"
          spacing={4}
          templateColumns="repeat(minmax(200px, 1fr))"
        >
          {pokemonList.map((pokemon, i) => {
            const isFavorite = favoritePokemons.some(
              (favPokemon) => favPokemon.name === pokemon.name
            );
            return (
              <CardContent key={i} name={pokemon.name} url={pokemon.url} isFavorite={isFavorite} />
            );
          })}
        </SimpleGrid>
      </Box>
      <Box className="favorite-list" width="50%">
        <Text className="favorite-title">FAVORITOS</Text>
        <SimpleGrid
          className="grid-container"
          spacing={4}
          templateColumns="repeat(minmax(200px, 1fr))"
        >
          {pokemonList.length > 0 ? (
            favoritePokemons.map((pokemon: any, i: number) => (
              <CardContent
                key={i}
                name={pokemon.name}
                url={pokemon.url}
                isFavorite={favoritePokemons.includes(pokemon)}
              />
            ))
          ) : (
            <p>No Pokémon found.</p>
          )}
        </SimpleGrid>
      </Box>
    </Flex>
  );
}

export default ListContent;
