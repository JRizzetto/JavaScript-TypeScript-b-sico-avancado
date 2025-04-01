const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let index of numeros) {

    if(index === 2 || index === 5) {
        console.log("Pulei o ", + index)
        continue;
    }
   

    if(index ===7) {
        console.log("Encontrado o número 7")
        break
    }

    console.log(index)
}