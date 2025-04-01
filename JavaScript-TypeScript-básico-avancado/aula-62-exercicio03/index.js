/*
Escreva uma função que recebe um número e retorne o seguinte: 
Número é divisível por 3 = Fizz
Número é divisível por 5 = Buzz
Número é divisível por 3 e 5 = FizzBUzz
Número NÃO é divisível por 3 e 5 = Retorna o próprio número
Checar se o número é realmente um número = Retorna o próprio número
Use a função com números de 0 a 100
*/

function divisivel(number) {
  if (number === isNaN) return console.log(number);
  if (number % 3 === 0 && number % 5 === 0) return "FizzzzzzBUzzzzzzz";
  if (number % 5 === 0) return "Buzzzzz";
  if (number % 3 === 0) return "Fizzzzzz";
  return number;
}

for (let i = 0; i <= 100; i++) {
  console.log(i, divisivel(i));
}
