// new Object -> Tem um prototype Object.prototype
// const objA = {
//   chaveA: "A",
// };

// const objB = {
//   chaveB: "B",
// };

// Object.setPrototypeOf(objB, objA)
// console.log(objB.chaveA)

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumenta = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const produto1 = new Produto("Mouse", 50);

const produto2 = {
  nome: "Caneca",
  preco: 30,
}

Object.setPrototypeOf(produto2, Produto.prototype)
produto2.desconto(10)

const produto3 = Object.create(Object.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 99
  },
  tamanho2: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42
  },
});

console.log(produto3)