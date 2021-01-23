import { getByText } from "@testing-library/dom";
import greeting from "./greeting";

test("it says hello", () => {
  greeting("Hello!");
  const greetingElement = getByText(document.body, "Hello!");
  expect(greetingElement).toBeTruthy();
  expect(greetingElement).toHaveClass("greeting");
});
