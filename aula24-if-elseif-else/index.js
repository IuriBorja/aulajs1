/*
    if pode ser usado sozinho
    Sempre que utilizo a palavra else, preciso de um if antes
    Eu posso ter vários else ifs na checagem
    Só posso ter um else na checagem
    Podemos usar condições sem else if, utilizando apenas if e else
*/

// Exemplo: 

// Criar uma estrutura que da bom dia, boa tarde ou boa noite dependendo
// da hora

/**
 * Entre 0 - 11 - Bom dia
 * Entre 12 - 17 - Boa tarde
 * Entre 18 - 23 - Boa noite
 */

const hora = Math.floor(Math.random() * 26);


if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Que horas são??');
}




//--------------------------------------------------



// Outro exemplo


const numero = Math.floor(Math.random() * 13);


if (numero >= 0 && numero <= 2) {
    console.log('Este número está entre 0 e 2');
} else if (numero >= 3 && numero <= 5) {
    console.log('Este número está entre 3 e 5');
} else if (numero >= 6 && numero <= 8) {
    console.log('Este número está entre 6 e 8');
} else if (numero >= 9 && numero <= 11) {
    console.log('Este número está entre 9 e 11');
} else {
    console.log('Esse número não está entre 0 e 11');
}

console.log(numero);