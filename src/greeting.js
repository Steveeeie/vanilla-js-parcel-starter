import "./greeting.styles.css";

function greeting(message) {
  const element = document.createElement("div");
  element.className = "greeting";
  element.innerHTML = message;
  document.body.appendChild(element);
}

export default greeting;
