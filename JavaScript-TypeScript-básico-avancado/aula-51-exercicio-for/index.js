

const elementos = [
    {tag: 'p', texto: 'Frase 1'}, 
    {tag: 'div1', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];


const container = document.getElementById("container");

const div = document.createElement("div");
container.appendChild(div);

for(let i =0; i < elementos.length; i++) {
    const { tag, texto } = elementos[i];

    let getTag = document.createElement(tag);
    div.appendChild(getTag);
    getTag.innerText = texto;
}

// const container = document.getElementById("container");
// const div = document.createElement("div");
// container.appendChild(div);

// for(let i = 0; i < elementos.length; i++) {
//     let getTaf = elementos[i].tag;
//     let getText = elementos[i].texto;

//     let creatElTag = document.createElement(getTaf);
//     creatElTag.innerText = getText;

//     div.appendChild(creatElTag);
// }