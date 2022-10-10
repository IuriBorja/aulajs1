const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');


iniciar.addEventListener('click', function(event) {
    relogio.innerHTML = mostraHora();
});

pausar.addEventListener('click', function(event) {
    alert('cliquei no pausar');
});

zerar.addEventListener('click', function (event) {
    relogio.innerHTML;
});


function mostraHora () {
    let data = new Date();


    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });

}




/*const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 86400);
*/