import { render, screen } from "@testing-library/react";
import ArtPieceDetails from "@/pages/art-pieces";

const testImage = {
  artist: "DaVinci",
  year: 1500,
  genre: "Renaissance",
  image: "/",
  dimensions: {
    width: 200,
    height: 200,
  },
};

jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      asPath: "/",
    };
  },
}));

test("renders image, title, artist, year, genre", () => {
  render(
    <ArtPieceDetails
      name={testImage.artist}
      dimensions={testImage.dimensions}
    />
  );
  const title = screen.getByRole("heading", {
    name: /title/i,
  });
  const artist = screen.getByText(/artist/i);
  const year = screen.getByText(/year/i);
  const genre = screen.getByText(/genre/i);
  const image = screen.getByRole("img");

  expect(title).toBeInTheDocument();
  expect(year).toBeInTheDocument();
  expect(genre).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  expect(artist).toBeInTheDocument();
});

test("renders button", () => {
  render(<ArtPieceDetails name={"DaVinci"} dimensions={{}} />);
  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});
