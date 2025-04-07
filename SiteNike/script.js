let body = document.querySelector("body");
let button = document.querySelector("button");
let tenis = document.querySelector(".tenis-img");

function mudarCor(cor, imagem) {
    body.style.background = cor;
    button.style.background = cor;
    tenis.src = imagem;
}