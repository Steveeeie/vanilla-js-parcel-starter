import image from "./image";

test("it renders an image with the correct class", () => {
  image("Hello!");
  const imageElement = document.querySelector(".image");
  expect(imageElement).toBeTruthy();
});
