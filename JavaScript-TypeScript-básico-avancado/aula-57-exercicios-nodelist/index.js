const getP = document.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const background = estilosBody.backgroundColor;

for(let index of getP) {
    index.style.backgroundColor = background;
    index.style.color = "#FFFFFF";
}