/*
Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
Retorne true se a imagem estiver no modo paisagem
*/

function ePaisagem(largura, altura) {
    // if(largura > altura) {
    //     return console.log(true)
    // }else {
    //     return console.log(false)
    // }

    return largura > altura ? `${true}` : `${false}`;
}
console.log(ePaisagem(500, 700))


const ePaisagem2 = (largura, altura) => largura > altura ? `${true}` : `${false}`;
console.log(ePaisagem2(300, 400))