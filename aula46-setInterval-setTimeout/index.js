// PARA TRABALHAR COM INTERVALO DE TEMPO SE UTILIZA A FUNÇAO setInterval()
// ENQUANTO QUE A FUNÇAO setTimeout EXECUTA APENAS UMA VEZ


function mostraHora () {
    let data = new Date();


    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });

}

const timer = setInterval(function() { //VAI CONFIGURAR UM INTERVALO DE TEMPO PARA QUE ALGUMA FUNÇÃO SEJA EXECUTADA EM DETERMINADO MOMENTO
    console.log(mostraHora());
}, 1000);

setTimeout(function() { //AQUI ESTA CONFIGURADO PARA PARAR EM 3 SEGUNDOS E PARAR A CONTINUAÇAO DA VARIAVEL TIMER
    clearInterval(timer); //QUAL VARIAVEL VAI SER A QUE VAI PARAR, NO CASO A VAR TIMER
}, 3000); //OS SEGUNDOS QUE DETERMINAN QUANDO PARAR

setTimeout(function() { //FUNÇAO QUE TEM COMO OBJETIVO FINALIZAR COM UMA MENSAGEM DEPOIS DE 5 SEG
    console.log('Olá mundo!');
}, 5000);