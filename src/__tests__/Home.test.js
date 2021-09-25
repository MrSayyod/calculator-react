import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { unmountComponentAtNode } from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import Home from "../layouts/Home";
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
    render(<Home />, container);
  });
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});

it("should display the header text in Home page", () => {
  const { getByTestId } = render(<Home />);
  expect(getByTestId("home-header-test")).toHaveTextContent(
    "Welcome to our page!"
  );
});

it("should display the first paragraph text in Home page", () => {
  const { getByTestId } = render(<Home />);
  expect(getByTestId("home-context-test")).toHaveTextContent(
    /Lorem ipsum dolor sit/i
  );
});
