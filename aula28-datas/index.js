
/*
const data = new Date(); //('2019-04-20 20:15:59.100');  
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês começa com zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - domingo, 6 - sábado
console.log(data.toString());
console.log(Date.now());

*/

// formas de se utilizar datas no JS usando o new Date();



// function que cria a data atual em que é printada 


function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;  //função que cria um zero ao lado dos numeros menores que 10
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getMilliseconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);