let angulo = 0;
let cartas = document.querySelector(".article-3-box-cards");
function rodar() {
  angulo -= 60;
  cartas.style.transform = `translateZ(-25rem) rotateY(${angulo}deg)`;
}
setInterval(rodar, 3000);
