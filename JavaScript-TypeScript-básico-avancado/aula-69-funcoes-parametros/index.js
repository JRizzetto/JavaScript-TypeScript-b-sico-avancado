// function funcao(a, b, c, d, e, f) {
//   let total = 0;
//   for(let argument of arguments) {
//     total = a + b + c;
//   }

//   console.log(total)
// }
// funcao(1, 2, 3, 4, 5, 6, 7);

// Desestrutuação de Objeto
// function funcao({ nome, sobrenome, idade}) {
//   console.log(nome, sobrenome, idade);
// }
// let obj = {nome: "Jefferson", sobrenome: "Rizzetto", idade: 36}
// funcao(obj)

// Desestrutuação de Array
// function funcao([valor1, valor2, valor3]) {
//   console.log(valor1, valor2, valor3)
// }
// funcao(["Jefferson", "Rizzetto", 36])

// function conta(operador, acumulador, ...numeros) {
//   for(let numero of numeros) {
//     if(operador === "+") acumulador += numero;
//     if(operador === "-") acumulador -= numero;
//     if(operador === "/") acumulador /= numero;
//     if(operador === "*") acumulador *= numero;
//   }

//   console.log(acumulador)
// }
// conta("+", 1, 20, 30, 40, 50);


// const conta = function (operador, acumulador, ...numeros) {
//   console.log(operador, acumulador, numeros);
// };
// conta("+", 1, 20, 30, 40, 50);

const conta = (...args) => {
  console.log(args)
}
conta("+", 1, 20, 30, 40, 50);