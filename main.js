import { pokemon } from "/test.js";
import { dittoObject } from "/poke.js";
const title = document.querySelector("#title");

title.textContent = "Ditto!";
// const span = document.createElement("span");
// document.body.appendChild(span);

// import { pokemonget } from "/test.js";
// span.textContent = await pokemonget();

const image = document.createElement("img");
image.classList.add("pokemon-image");

image.src = dittoObject.sprites.other.home.front_shiny;
document.body.appendChild(image);
console.log(dittoObject.sprites.other.home.front_shiny);
