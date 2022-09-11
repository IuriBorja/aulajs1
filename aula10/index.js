// Operadores aritméticos

// Adição / Concatenação +
// Subtração -
// Multiplicação *
// Divisão /
// Potenciação **
// Resto da divisão %


// Incremento = ++
// Decremento = --

// Exemplo:

let contador = 2;
contador++;

console.log(contador);

// Incremento serve para acrescentar mais um numero



// Exemplo diferente

let contador2 = 2;
contador2 += 10;

console.log(contador2);

// Nesse exemplo serviu para acrescentar o 10 , ficando 2 + 10 = 12.


// É possivel fazer com os outros operadores, exemplo:

let contador3 = 2;
contador3 *= 10;

console.log(contador3);

// Nesse exemplo fizemos 2 * 10.



//NaN - Not a number

//É quando o javascript reconhece que aquele valor da variável não é 
// um numero

//Exemplo:

const num1 = 10;
const num2 = 'Iuri';

console.log(num1 * num2);

//Ao usar a multiplicação ele da o NaN, porem ao usar a soma. ele concatena
// mesmo que seja um numero com uma string

//Exemplo:

const num3 = 10;
const num4 = 'Iuri';

console.log(num3 + num4);

//Aqui a resposta fica 10Iuri.


//Para ajudar o javascript a reconhecer um numero mesmo que este esteja
// como uma string usa-se a palavra Number antes da string

//Exemplo:

const num5 = 10;
const num6 = Number ('5.2')
console.log(num5 + num6);
console.log(typeof num6);


//Nesse exemplo fica: 15.2 pois é somado e o javascrip reconhece como
//numero

//typeof serve para saber qual é o tipo primitivo que contem a variável
// Que no caso desse exemplo é number