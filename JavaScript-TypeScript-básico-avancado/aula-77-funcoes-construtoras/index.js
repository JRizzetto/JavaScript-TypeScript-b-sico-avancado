// Função Construtora retorna objetos 
// Função fábrica (factory) também 

// Na função construtora precisamos mudar a convenção de como escrevemos a função, sempre com letra maiuscula. "Pessoa"

function Pessoa(nome, sobrenome) {
  const ID = 123456;

  const metodoInterno = function() {
    
  }

  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function() {
    console.log(this.nome + ": Sou um método")
  }
}

const pessoa1 = new Pessoa("Jefferson", "Rizzetto")
const pessoa2 = new Pessoa("Suelen", "Fogo")

pessoa1.metodo();