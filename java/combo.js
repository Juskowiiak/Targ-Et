//DECLARACAO DAS IMAGENS
let combo1 = document.querySelector(".article-2-livro-pag2-combo-c1");
let combo2 = document.querySelector(".article-2-livro-pag2-combo-c2");
let combo3 = document.querySelector(".article-2-livro-pag2-combo-c3");
let combo4 = document.querySelector(".article-2-livro-pag2-combo-c4");
let combo5 = document.querySelector(".article-2-livro-pag2-combo-c5");
document.querySelector(".article-2-livro-pag1-info-skill").innerHTML =
  "CannonBall Buster";
combo1.addEventListener("mouseover", function () {
  document.querySelector("#info-video").src = "./video/cl1.mp4";
  document.querySelector(".article-2-livro-pag1-info-skill").innerHTML =
    "CannonBall Buster";
});
combo2.addEventListener("mouseover", function () {
  document.querySelector("#info-video").src = "./video/cl2.mp4";
  document.querySelector(".article-2-livro-pag1-info-skill").innerHTML =
    "Manhattan Drop";
});
combo3.addEventListener("mouseover", function () {
  document.querySelector("#info-video").src = "./video/cl3.mp4";
  document.querySelector(".article-2-livro-pag1-info-skill").innerHTML =
    "Victory Bomb";
});
combo4.addEventListener("mouseover", function () {
  document.querySelector("#info-video").src = "./video/cl4.mp4";
  document.querySelector(".article-2-livro-pag1-info-skill").innerHTML =
    "Giant Swing";
});
combo5.addEventListener("mouseover", function () {
  document.querySelector("#info-video").src = "./video/cl5.mp4";
  document.querySelector(".article-2-livro-pag1-info-skill").innerHTML =
    "Rolling Death Cradle";
});
