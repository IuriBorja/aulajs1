/*
Operadores de comparação:

    > maior que 
    < menor que
    >= maior ou igual a 
    <= menor ou igual a
    === igualdade estrita (valor e tipo)
    !== diferente estrito (valor e tipo)
*/

// EXEMPLOS

console.log(10 > 8); // se 10 é maior que 8, resultado: true
console.log(10 < 8); // se 10 é menor que 8, resultado: false
console.log(10 <= 8); // se 10 é menor ou igual 8, resultado: false
console.log(10 >= 8); // se 10 é maior ou igual a 8, resultado: true



const num1 = 10; // number
const num2 = '10'; // string

const comp = num1 !== num2;

console.log(comp); // resultado: true, pois 10 é tipo number e 8 é tipo
// string

// os operadores === e !== comparam não só o valor como o tipo, que nesse
// exemplo acima por mais que seja o mesmo valor, não é o mesmo tipo
