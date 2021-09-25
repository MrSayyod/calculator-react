import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "../layouts/Navbar";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders correctly", () => {
  act(() => {
    render(<Navbar />, container);
  });
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});

it("should display the header text in Navbar", () => {
  const { getByTestId } = render(<Navbar />);
  expect(getByTestId("navbar-header-test")).toHaveTextContent("Math Magicians");
});

it("renders correctly and should display the link for homepage", () => {
  render(<Navbar />);
  const linkForHomepage = screen.getByText("Home");
  expect(linkForHomepage).toBeInTheDocument();
});

it("renders correctly and should display the link for calculator page", () => {
  render(<Navbar />);
  const linkForCalculator = screen.getByText("Calculator");
  expect(linkForCalculator).toBeInTheDocument();
});

it("renders correctly and should display the link for quotes pagew", () => {
  render(<Navbar />);
  const linkForQuotes = screen.getByText("Quotes");
  expect(linkForQuotes).toBeInTheDocument();
});
