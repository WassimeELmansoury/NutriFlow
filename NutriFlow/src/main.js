import { renderStarPage, renderHomePage } from "./render.js";

renderStarPage();

document.getElementById("bodyP").addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-next")) {
        renderHomePage(); 
    }
});