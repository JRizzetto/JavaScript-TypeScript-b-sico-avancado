// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [primeiroNumero, segundoNumero, ...resto] = numeros;

// console.log(primeiroNumero, segundoNumero, resto);

// const numeros = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// const [ ,[ , ,seis]] = numeros;

// console.log(seis)

// const pessoa = {
//   nome: "Jeferson",
//   sobrenome: "Rizzetto",
//   idade: 36,
//   endereco: {
//     rua: "João Antonio ANdrade",
//     numero: 1065,
//   },
// };

// // Atribuição via desestruturação
// const {
//   endereco: { rua: r = 12345, numero },
//   ...resto
// } = pessoa;
// console.log(r, numero);
// console.log(resto);

// const arrayFor = [0, 1, 2, 3, 4, 5];

const frutas = ["maça", "pera", "uva", "banana", "morango"]


for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i} - ${frutas[i]}`)
}
