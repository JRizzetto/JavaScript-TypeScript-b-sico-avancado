// Retorne a soma do dobro de todos os pares
// - > filtrar
// -> Dobrar valores
// -> Reduzir
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numPares = numeros.filter(function (num) {
//   return num % 2 === 0;
// });

// const dobroPares = numPares.map(function (valor) {
//   return valor * 2;
// });

// const somaDobroPares = dobroPares.reduce(function (acumulador, valor) {
//   return (acumulador += valor);
// });

// console.log(somaDobroPares);

const numPares = numeros
  .filter((num) => num % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((ac, valor) => (ac += valor));

console.log(numPares);
