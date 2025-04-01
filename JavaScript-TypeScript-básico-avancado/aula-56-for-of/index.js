

// const nome = ["luiz", "otavio", "henrique"]

// for(let i = 0; i < nome.length; i++) {
//     console.log(nome[i])
// }

// for(let indice in nome) {
//     console.log(indice, nome[indice])
// }

// for(let indice of nome) {
//     console.log(indice)
// }

// nome.forEach((e, indice, array) => {console.log(indice, e, array)})

const pessoa = {
    nome: "Jefferson",
    sobrenome: "Rizzetto"
};

for(let chave in pessoa) {
    console.log(chave, pessoa)
}