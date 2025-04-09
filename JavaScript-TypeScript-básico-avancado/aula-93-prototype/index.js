// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = function() {
    return `O nome completo é ${nome} ${sobrenome}`
  }
}

Pessoa.prototype.nomeCompleto = function() {
  return `O nome completo é ${nome} ${sobrenome}`
}

// instância
const p1 = new Pessoa("Jefferson", "Rizzetto")
const data = new Date()

console.log(p1)
console.log(data)