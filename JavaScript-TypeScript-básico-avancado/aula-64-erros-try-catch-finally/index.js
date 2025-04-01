// try {
//   console.log(naoExisto)
// } catch(error) {
//   console.log("naoExisto não existe", error)
// }

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new ReferenceError("x e y precisam ser números");
  }

  return x + y;
}

try {
  console.log(soma(1, 2));
  console.log(soma("oi", 2));
}catch(error) {
  console.log("Alguma coisa mias amigável")
}
