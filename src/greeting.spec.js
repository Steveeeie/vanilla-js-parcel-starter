import { getByText } from "@testing-library/dom";
import greeting from "./greeting";

test("it renders a greeting with the correct class", () => {
  greeting("Hello!");
  const greetingElement = getByText(document.body, "Hello!");
  expect(greetingElement).toHaveClass("greeting");
});
