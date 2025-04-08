// const pessoa1 = new Object();
// pessoa1.nome = "Jefferson";
// pessoa1.sobrenome = "Rizzetto";
// pessoa1.idade = 36;
// pessoa1.falarNome = function() {
//   return (`Meu nome é ${this.nome} e nasci em ${this.getDataNarscimento()}`)
// }
// pessoa1.getDataNarscimento = function() {
//   const dataAtual = new Date();
//   return dataAtual.getFullYear() - this.idade;
// }

// for (let chave in pessoa1) {
//   console.log(pessoa1[chave])
// }

 

// Factory fynctions
// function criaPessoa(nome, sobrenome, idade) {
//   return {
//     nome,
//     sobrenome,
//     idade,
//     get nomeCompleto() {
//       return `${this.nome} ${this.sobrenome} ${this.idade}`
//     }
//   }
// }

// const p1 = criaPessoa("Jefferson", "Rizzetto", 36)
// console.log(p1.nomeCompleto)




// Constructor function
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const p1 = new Pessoa("Jefferson", "Rizzetto")
console.log(p1)