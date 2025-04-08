// Função MAP

// Dobrar os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosDobro = numeros.map((num) => num * 2);
// console.log(numerosDobro)

// Para cada elemento faça:
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

// Retorne apenas uma string com o nome da pessoa
const returnString = pessoas.map(function (valor) {
  return valor.nome;
});
// console.log(returnString)

// Remova apenas a chave "nome" do objeto
const removeKey = pessoas.map(function (valor) {
  return { idade: valor.idade };
});
// console.log(removeKey);

// Adicione uma chave id em cada objeto
const addId = pessoas.map(function (valor, indice) {
    const newObj = { ...valor }
    newObj.id = indice + 1
    return newObj
});
console.log(addId)
console.log(pessoas)
