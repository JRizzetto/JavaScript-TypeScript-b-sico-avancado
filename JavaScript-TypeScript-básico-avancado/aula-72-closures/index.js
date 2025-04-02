function retornaFuncao(nome) {
  return function() {
    return nome;
  }
}

const funcao = retornaFuncao("Rodrigão");
const funcao2 = retornaFuncao("Pedrão");

console.dir(funcao)
console.dir(funcao2)

console.log(funcao(), funcao2());