

// const frutas = ["banana", "maça", "pera", "uva"];

const pessoa = { 
    nome: "Luiz",
    sobrenome: "Rizzetto",
    idade: 30
}

console.log(pessoa.nome)
console.log(pessoa['idade'])

for(let chave in pessoa) {
    console.log(chave, pessoa[chave])
}

// for(let i in frutas) {
//     console.log(frutas[i])
// }


// for(let i =0; i < frutas.length; i++) {
//     console.log(i)
// }