// const tresHoras = 60*60 * 3 * 1000;
// const umDia = 60*60*24*1000
// const data = new Date(0 + tresHoras + umDia);

// const data = new Date(2019, 3, 20, 15,14,27); // Ano, mês, dia, hora, minutos, segundos, milisegundos

// const data = new Date("2019-04-20 20:20:59");
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth());
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minuto', data.getMinutes());
// console.log('Segundos', data.getSeconds());
// console.log('Mili Segundos', data.getMilliseconds());
// console.log('Dia da semana', data.getDay());
// console.log(data.toString());
// console.log(Date.now())

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
  const dia = data.getDate();
  const mes = data.getMonth();
  const ano = data.getFullYear();
  const hora = data.getHours();
  const min = data.getMinutes();
  const seg = data.getSeconds();

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
