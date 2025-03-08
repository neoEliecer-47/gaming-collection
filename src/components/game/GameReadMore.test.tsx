import React from 'react'
import { render, screen, fireEvent } from "@testing-library/react";
import GameReadMore from "./GameReadMore"; // Import the component

test("should toggle Read More and Show Less", () => {
  const description = "This is a long description for testing purposes. ".repeat(10); // Make sure the description is long enough

  render(<GameReadMore description={description} initialHeight={5} />);

  // First, check if "Read More" button is rendered
  const readMoreButton = screen.getByText(/read more/i); // This uses a regex match to be case-insensitive
  expect(readMoreButton).toBeInTheDocument();

  // Simulate click on "Read More"
  fireEvent.click(readMoreButton);

  // After clicking, "Show Less" button should be visible
  const showLessButton = screen.getByText(/show less/i);
  expect(showLessButton).toBeInTheDocument();
});