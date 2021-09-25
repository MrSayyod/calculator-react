import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { unmountComponentAtNode } from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import Quote from "../layouts/Quote";
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
    render(<Quote />, container);
  });
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});

it("should display the first paragraph text in Home page", () => {
  const { getByTestId } = render(<Quote />);
  expect(getByTestId("quote-context-test")).toHaveTextContent(
    /Mathematics is not about numbers/i
  );
});
