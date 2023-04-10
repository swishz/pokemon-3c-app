import { render, fireEvent, screen } from "@testing-library/react";
import ListContent from "../index";

describe("ListContent", () => {
  it("renders without crashing", () => {
    render(<ListContent />);
  });

  it("fetches and displays a list of Pokemon", async () => {
    render(<ListContent />);
    const pokemonList = await screen.findAllByTestId("pokemon-card");
    expect(pokemonList).toHaveLength(20);
  });
});
