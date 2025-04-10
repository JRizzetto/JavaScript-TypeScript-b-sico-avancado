// Return 
// Retorna um valor 
// Termina a função 

// function soma(a, b) {
//   return a + b
// }

// document.addEventListener("click", function() {
//   document.body.style.backgroundColor = "red"
// })

// function criaPessoa(nome, sobrenome) {
//   return { nome, sobrenome }
// }

// const p1 = criaPessoa("Luiz", "Otávio");
// const p2 = { 
//   nome: "João",
//   sobrenome: "Oliveira"
// }

// console.log(p1)
// console.log(p2)

// function falaFrase(comeco) {
//   function falaResto(resto) {
//     return comeco + ' ' + resto
//   }

//   return falaResto
// }

// const fala = falaFrase("Olá")
// const resto = fala("Mundo!")

// console.log(resto)


function criaMultiplicador(multiplicador) {
  return function(n) {
    return n * multiplicador
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(5))
console.log(triplica(5))
console.log(quadriplica(5))