function criarPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },
    fala: function (assunto) {
      return `${nome} está ${assunto}`;
    },
    altura: a,
    peso: p,
    // Getter
    get imc() {
      const indiceIMC = this.peso / this.altura ** 2;
      return indiceIMC.toFixed(2);
    },
  };
}

const pessoa = criarPessoa("Jefferson", "Rizzetto", 1.8, 90);
pessoa.nomeCompleto = "Amalia Terezinha Bonfim Rizzetto";
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.nomeCompleto);
