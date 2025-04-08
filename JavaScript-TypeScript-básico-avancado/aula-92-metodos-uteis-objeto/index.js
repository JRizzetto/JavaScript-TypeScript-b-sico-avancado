// const produto = { nome: "Produto", preco: 18 };
// const caneca = { ...produto, status: "Você passou no teste" }

// caneca.nome = "Caneca de Programação";
// caneca.preco = 10;

// console.log(produto);
// console.log(caneca);



//Object.keys
// const produto = { nome: "Produto", preco: 18 };
// console.log(Object.keys(produto))

//Object.freeze
// const produto = { nome: "Produto", preco: 18 };
// Object.freeze(produto)
// produto.nome = "Caneca"
// console.log(produto)

// getOwnPropertyDescriptors
// const produto = { nome: "Produto", preco: 18 };
// Object.getOwnPropertyDescriptors(produto, 'nome', {
//   writable: false,
//   enumerable: false,
//   value: "QUalquer coisa"
// });

// console.log(Object.getOwnPropertyDescriptors(produto, 'nome'));
// console.log(produto)

// Object.values
// const produto = { nome: "Produto", preco: 18 };
// console.log(Object.values(produto))


// Object.entries
const produto = { nome: "Produto", preco: 18, material: "procelana" };
for(let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor)
}