// defineProperty -> Getter e Setters
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // Mostrra a chave
    configurable: true, // Pode apagar ou reconfigurar a chave
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        throw new TypeError("mensagem de erro enviada");
        return;
      }
      estoquePrivado = valor;
    },
  });
}

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      nome = valor;
    }
  }
}

const produto1 = criaProduto("Cadeira Gamer")
console.log(produto1.nome)

// const p1 = new Produto("Mouse", 40, 3);
// console.log(p1);

// p1.estoque = "500";
// console.log(p1.estoque);
