

//FUNÇÃO PARA PRESERVAR TODAS AS VARIÁVEIS DE SEREM GLOBAIS

function relogio () {
//FUNÇÃO PARA CRIAR OS SEGUNDOS
function criaHoraDosSegundos (segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString ('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

//AQUI AS VARIÁVEIS PARA CAPTURAR AS CLASSES DOS BOTÕES
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

//AQUI VARIÁVEIS PARA CONTROLAR OS SEGUNDOS
let segundos = 0;
let timer;


function iniciaRelogio () {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}


//AQUI ESTÃO AS AÇÕES PARA OS BOTÕES

iniciar.addEventListener('click', function(event) {
    relogio.classList.remove ('pausado');
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function(event) {
    relogio.classList.add ('pausado');
    clearInterval(timer);
});

zerar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    relogio.classList.remove ('pausado');
    segundos = 0;
});

}

relogio();