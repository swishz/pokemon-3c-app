import { render, fireEvent } from "@testing-library/react";
import CardContent from "../index";

it("renders the Pokemon name and image", async () => {
  const { getByText, getByAltText } = render(
    <CardContent name="Pikachu" url="https://pokeapi.co/api/v2/pokemon/25/" />
  );

  const pokemonName = getByText("Pikachu");
  expect(pokemonName).toBeInTheDocument();

  const pokemonImage = getByAltText("Pikachu");
  expect(pokemonImage).toBeInTheDocument();
});

it("handles click event on like button", async () => {
  const mockDispatch = jest.fn();
  const { getByTestId } = render(
    <CardContent name="Pikachu" url="https://pokeapi.co/api/v2/pokemon/25/" isFavorite={false} />
  );

  const likeButton = getByTestId("like-button");
  fireEvent.click(likeButton);

  expect(mockDispatch).toHaveBeenCalled();
});
