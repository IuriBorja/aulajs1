/*
Escreva uma função que recebe um número e retorne o seguinte:

    Número é divisível por 3 = Fizz
    Número é divisível por 5 = Buzz
    Número é divisível por 3 e 5 = FizzBuzz
    Número NÃO é divisível por 3 e 5 = Retorna o próprio número
    Checar se o número é realmente um número = Retorna o próprio número
    Use a função com números de 0 a 100
*/
function div(x) {
    if (typeof x !== 'number') {
        return NaN;
    } else if (x % 3 === 0 && x % 5 === 0) {
        return 'FizzBuzz';
    } else if (x % 3 === 0) {
        return 'Fizz';
    } else if (x % 5 === 0) {
        return 'Buzz';
    } else if (x % 3 !== 0 || x % 5 !== 0) {
        return x;
    }
    return x;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, div(i));
}




//OUTRA FORMA MAIS PRÁTICA E REFATORADA DE SE FAZER

//ESSE EXEMPLO ESTA SEM O LOOP  
const fizzBuzz = (num) => {
    return (isNaN(num)) ? `${num} não é um número válido.` :
        ((num % 3 == 0) && (num % 5 == 0)) ? `FizzBuzz` :
        (num % 3 == 0) ? `Fizz` :
        (num % 5 == 0) ? `Buzz` : num;
};

