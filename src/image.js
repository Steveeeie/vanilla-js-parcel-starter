import "./image.styles.css";

function image(src) {
  const element = new Image();
  element.className = "image";
  element.src = src;
  document.body.appendChild(element);
}

export default image;
