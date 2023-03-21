import { render, screen } from "@testing-library/react";
import Navigation from ".";

test("renders links Spotlight and Pieces", () => {
  render(<Navigation />);
  const spotlightLink = screen.getByRole("link", { name: /spotlight/i });
  const piecesLink = screen.getByRole("link", { name: /pieces/i });
  expect(spotlightLink).toBeInTheDocument();
  expect(piecesLink).toBeInTheDocument();
});
