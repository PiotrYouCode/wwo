let button = document.querySelector(".navigation__link--button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    body.classList.toggle("other");

    themeName.innerText = body.classList.contains("other") ? "zielony" : "inny";

});