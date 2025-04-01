function criarHorasSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "GMT",
  });
}

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let segundos = 0;
let timer;

function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criarHorasSegundos(segundos);
  }, 1000);
}

document.addEventListener("click", function (e) {
  let el = e.target;

  if (el.classList.contains("zerar")) {
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    segundos = 0;
  }

  if (el.classList.contains("iniciar")) {
    clearInterval(timer);
    iniciaRelogio();
  }

  if (el.classList.contains("pausar")) {
    clearInterval(timer);
  }

});

// iniciar.addEventListener("click", function () {
//   clearInterval(timer);
//   iniciaRelogio();
// });

// pausar.addEventListener("click", function () {
//   clearInterval(timer);
// });

// zerar.addEventListener("click", function () {
//   clearInterval(timer);
//   relogio.innerHTML = "00:00:00"
//   segundos = 0;
// });
