// defineProperty ou defineProperties

// function Produto(nome, preco, estoque) {
//   this.nome = nome;
//   this.preco = preco;

//   Object.defineProperty(this, "estoque", {
//     enumerable: true, // Mostrra a chave
//     value: estoque, // Valor da chave
//     writable: true, // Pode reescrever o valor ou não
//     configurable: false, // Pode apagar ou reconfigurar a chave
//   });
// }

// const p1 = new Produto("Mouse", 33.0, 4);
// console.log(Object.keys(p1));

// for (let chave in p1) {
//   console.log(chave);
// }



// defineProperties
function Produto(nome, preco, estoque) {
  Object.defineProperty(this, "estoque", {
    enumerable: true, // Mostrra a chave
    value: estoque, // Valor da chave
    writable: true, // Pode reescrever o valor ou não
    configurable: false, // Pode apagar ou reconfigurar a chave
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, 
      value: nome, 
      writable: true, 
      configurable: true, 
    },
    preco: {
      enumerable: true, 
      value: preco, 
      writable: true, 
      configurable: true, 
    },
  });
}

const p1 = new Produto("Mouse", 33.0, 4);
console.log(p1);

for (let chave in p1) {
  console.log(chave);
}