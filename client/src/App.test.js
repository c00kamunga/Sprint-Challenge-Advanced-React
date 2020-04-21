import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";






it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("render the app", () => {
  const wrapper = rtl.render(<App />);
  wrapper.debug();
});

test("fake Test", () => {
  expect(true).toBeTruthy();
});


it('renders a text', () => {
  const wrapper = rtl.render(
    <App/>
  );
  const element = wrapper.queryByText(/Soccer Players Ranked by Number of Searches/i);
  expect(element).toBeInTheDocument()
  expect(element).toBeTruthy();
  expect(element).toBeVisible();
})