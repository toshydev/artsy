import { render, screen } from "@testing-library/react";
import Spotlight from ".";


test("renders artistname at the Spotlight page", () => {
  render(<Spotlight />);
  
  const headingTester = screen.getByRole('heading');
  
  expect(headingTester).toBeInTheDocument();
  
});
