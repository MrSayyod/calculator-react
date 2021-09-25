import React from "react";
// import renderer from "react-test-renderer";
import App from "../components/App";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from 'pretty'

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
    render(<App />, container);
  });
  expect(
    pretty(container.innerHTML))
    .toMatchSnapshot()
});
