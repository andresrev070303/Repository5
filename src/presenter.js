import anioBisiesto from "./anioBisiesto";

const anio_Input = document.querySelector("#anio");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const anio = Number.parseInt(anio_Input.value);

  div.innerHTML = "<p>" + anioBisiesto(anio) + "</p>";
});
