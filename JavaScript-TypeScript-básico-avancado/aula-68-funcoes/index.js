// Declaração de função (Function hoisting)
function falaOi() {
  console.log("Oieee")
}
falaOi();

// First-class objects (Objetos de primeira classe)
// Function Exprission 
const souUmDado = function() {
  console.log("sou um dado")
}
souUmDado();

// Arrow function
const funcaoArrow = () => {
  console.log("Sou uma arrow function!")
}
funcaoArrow();

// Dentro de um objeto
const obj = {
  falar() {
    console.log("Estou falando dentro de um Objeto")
  }
}
obj.falar();