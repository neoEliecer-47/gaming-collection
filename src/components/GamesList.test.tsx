import { render, screen, waitFor } from "@testing-library/react";
import GamesList from "./GamesList";
import { fetchGames, fetchTopGames } from "../helpers/index";

jest.mock("../helpers/index.ts", () => ({
  fetchGames: jest.fn(),
  fetchTopGames: jest.fn(),
}));

jest.mock('./__mocks__/Pagination.tsx');
jest.mock('./__mocks__/GamesCard.tsx');

describe("GamesList Component", () => {
  it("renders game cards when data is available", async () => {
    const mockGamesData = {
      count: 40,
      results: [
        { id: 1, name: "Game 1", background_image: "game1.jpg" },
        { id: 2, name: "Game 2", background_image: "game2.jpg" },
      ],
    };

    (fetchGames as jest.Mock).mockResolvedValue(mockGamesData);

    render(<GamesList searchParams={{ page: "1" }} />);

    await waitFor(() => {
      expect(screen.getByText("GamesCard Mock: Game 1")).toBeInTheDocument();
      expect(screen.getByText("GamesCard Mock: Game 2")).toBeInTheDocument();
    });
  });
});