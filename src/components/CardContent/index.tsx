import "./cardContent.css";
import { Card, CardBody, Image, Text, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FcLike, FcDislike } from "react-icons/fc";
import axios from "axios";
import { useDispatch } from "react-redux";
import { favoritePokemon, unfavoritePokemon } from "../../redux/pokemonSlice";
import { useLocalStorage } from "hooks/useLocalStorage";

interface CardProps {
  name: string;
  url: string;
  isFavorite?: boolean;
}
interface Pokemon {
  name: string;
  url: string;
}

function CardContent({ name, url, isFavorite }: CardProps) {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const [favoriteList, setFavoriteList] = useLocalStorage("favorites", []);

  useEffect(() => {
    const axiosImage = async () => {
      if (url) {
        const response = await axios.get(url);
        const pokemonData = response.data;
        const pokemonImage = pokemonData.sprites.other["official-artwork"].front_default;
        setImage(pokemonImage);
      }
    };
    axiosImage();
  });

  const handleLike = () => {
    if (isFavorite) {
      dispatch(unfavoritePokemon({ name, url }));
      setFavoriteList(favoriteList.filter((pokemon) => pokemon.name !== name));
    } else {
      dispatch(favoritePokemon({ name, url }));
      setFavoriteList([...favoriteList, { name, url } as Pokemon]);
    }
  };

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      className="pokemon-card"
    >
      <Image
        className="pokemon-img"
        borderRadius="full"
        boxSize="70px"
        src={image}
        alt={name}
        onError={(e) => {
          (e.target as HTMLImageElement).src = "images/pokebola.png";
        }}
      />
      <CardBody className="pokemon-cardBody">
        <Text className="pokemon-name">{name}</Text>
        <div className="icon-container">
          {isFavorite ? (
            <Icon as={FcDislike} onClick={handleLike} boxSize={10} />
          ) : (
            <Icon as={FcLike} onClick={handleLike} boxSize={10} />
          )}
        </div>
      </CardBody>
    </Card>
  );
}

export default CardContent;
