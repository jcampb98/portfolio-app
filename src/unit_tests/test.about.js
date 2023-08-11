import React from 'react';
import { render } from "@testing-library/react";
import { about } from "./components/about.js";

test('renders correct text', () => {
  render(<about />);
  const headingElement = screen.getByText('Hi, Im Joshua');
  expect(headingElement).toBeInTheDocument();
});