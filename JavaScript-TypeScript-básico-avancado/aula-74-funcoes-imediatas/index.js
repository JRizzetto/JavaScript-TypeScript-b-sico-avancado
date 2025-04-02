// IIFE - Immediately invoked fenction expression

(function (idade, peso, altura) {
  const sobrenome = "Rizzetto";
  function criarNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criarNome("Jefferson"));
  }

  falaNome();
  console.log(idade, peso, altura)
})(30, 80, 1.80);

