// Filter => Sempre vai retornar um array com a mesma quantidade ou menos

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callBack(num) {
//     return num > 10
// }

// const filtrados = numeros.filter(callBack)
// console.log(filtrados)

// const filtrado = numeros.filter((num) => num > 10);
// console.log(filtrado);

// Retorne as pessoas que tem o nome com mais de 5 letras
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

// const maisCincoLetras = pessoas.filter(obj => obj.nome.length > 5)
// console.log(maisCincoLetras)

// const pessoasVelhasCinquenta = pessoas.filter(obj => obj.idade > 50);
// console.log(pessoasVelhasCinquenta)

const pessoasFinalA = pessoas.filter(function (obj) {
    return obj.nome.toLowerCase().endsWith('a');
});
console.log(pessoasFinalA);
