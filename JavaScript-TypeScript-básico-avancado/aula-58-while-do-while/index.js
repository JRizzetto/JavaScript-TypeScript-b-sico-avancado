

// let controle = 0;

// while(controle <= 10) {
//     console.log(controle);
//     controle++;
// }

// console.log("-------------------------------------------------------------------")

// let i = 0;
// const nome = "Jefferson"
// while(i <= nome.length) {
//     console.log(i, nome[i])
//     i++;
// }

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;

let rand = random(min, max);
console.log(rand)

// while(rand != 10) {
//     rand = random(min, max);
//     console.log(rand);
// }

do {
    rand = random(min, max);
    console.log(rand);
} while(rand != 10)