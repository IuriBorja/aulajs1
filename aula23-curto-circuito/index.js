/*
Se eu uso &&: Ele retorna o primeiro valor falso da expresão, 
caso todas seja verdadeiro retorna o ultimo valor;

Se eu uso ||: Retorna o primeiro valor true da expresão,
 caso todas sejam falsas retorna o ultimo valor.

Se eu uso !: eu nego a expressão!


&& -> false && true -> A PARTIR DO MOMENTO Q ACHA UM VALOR FALSE, 
RETORNA O FALSE E RETORNA LITERALMENTE O VALOR**

|| -> true || false -> VAI RETORNAR "O VALOR VERDADEIRO" 

/*
 * FALSY
 * false
 * 0
 * '' "" ``
 * null / undefined
 * NaN
Qualquer atributo que receber esse valor ai em cima,
 ele já e considerado como false
 */


// EXEMPLOS

console.log('Iuri' && 0 && 'Maria'); // resultado : 0 **
// pois é o primeiro valor falso da expressão

console.log('Iuri' || 0 || 'Maria'); // resultado: 'Iuri'
// pois ele retorna o primeiro valor true


function falaOi () {
    return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi); // resultado: false
// pois o valor de vaiExecutar é falso e por ser o operador lógico
// AND (&&) o primeiro valor falso é mostrado

//MESMO EXEMPLO COM VALOR TRUE = 'iuri'

function ola () {
    return 'ola';
}

const roda = 'iuri';

console.log(roda && ola()); // resultado: ola, sendo assim true
// pois ao ter dois valores true, permanece valor true





const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao); // resultado: preto0

// nesse exemplo como o valor de corUsuario é null, o operador logico
// OR || fica com o valor true que é 'preto'

const corUsuario2 = 'vermelho';
const corPadrao2 = corUsuario2 || 'preto';

console.log(corPadrao2); // resultado: vermelho

// aqui o valor se torna 'vermelho' pois é o primeiro valor true
// encontrado pelo operador logico OR ||