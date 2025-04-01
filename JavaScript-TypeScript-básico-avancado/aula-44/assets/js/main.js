const form = document.querySelector("form");
const containerResposta = document.querySelector(".container-resposta");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const peso = form.peso.value;
    const altura = form.altura.value;

    let result = parseInt(peso / (altura * altura));

    if(result < 18.5) {
        console.log("Abaixo do peso");
        containerResposta.innerHTML = "Abaixo do peso"
    }else if(result <= 24.9) {
        console.log("Peso normal");
        containerResposta.innerHTML = "Peso normal"
    }else if(result <= 29.9) {
        console.log("Sobrepeso");
        containerResposta.innerHTML = "Sobrepeso"
    }else if(result <= 34.9) {
        console.log("Obesidade grau 1");
        containerResposta.innerHTML = "Obesidade grau 1"
    }else if(result <= 39.9) {
        console.log("Obesidade grau 2");
        containerResposta.innerHTML = "Obesidade grau 2"
    }else {
        console.log("Obesidade grau 3")
        containerResposta.innerHTML = "Obesidade grau 3"
    }

    containerResposta.classList.toggle("hidden");
    form.peso.value = "";
    form.altura.value = "";
})

