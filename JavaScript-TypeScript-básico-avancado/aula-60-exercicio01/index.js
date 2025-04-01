// Escreva uma função que recebe 2 números e que retorne o maior dele

function getNumber(num1, num2) {
    const result =  num1 > num2 ? `${num1}` : `${num2}`;
    return result
}
console.log(getNumber(20, 18))

const getNumber2 = (x, y) => x > y ? `${x}` : `${y}`;

console.log(getNumber2(300, 200))