/*
Dados Primitivos (imutáveis) - string, number, boolean, undefined, null
(bigint, symbol) - Valores copiados
*/

let a = 'A';
let b = a; // cópia
console.log(a, b); // resultado é A A

a = 'Outra coisa';
console.log(a, b); // resultado é Outra coisa A, ou seja, o valor de a é
// alterado, enquanto que de b se torna permanente imutavel

/*
Nesse exemplo acima, o valor de a passou a ser atribuido a b que faz com
que o valor de b não possa ser alterado, é uma cópia
*/

//------------------------------------------------------------------

/*
Referência (mutáveis) - array, object, function - Passados por referência
*/

let c = [1, 2, 3];
let d = c;
console.log(c, d); // resultado: [1,2,3][1,2,3]

c.push(4);
console.log(c, d); // resultado: [1,2,3,4][1,2,3,4]

d.pop();
console.log(c, d); // resultado: [1,2,3][1,2,3]

/*
No exemplo acima o valor de c é atribuido a d, que faz com que ambos tenham
o mesmo valor simultaneamente, onde ao alterar um ou outro, os dois serão
alterados
*/

// CASO QUISER COPIAR O DADO DOS MUTAVEIS COMO NOS PRIMITIVOS PODE 
// SER USAR O SPREAD
// EXEMPLO:

let x = [1, 2, 3];
let y = [...x]; //spread , agora o valor de y copia o valor de x e permanece

console.log(x, y); // resultado: [ 1, 2, 3 ] [ 1, 2, 3 ]


x.push(4); // AQUI SÓ FOI ALTERADO O X E O Y PERMANECE COM O MESMO VALOR
console.log(x, y); // resultado: [ 1, 2, 3, 4 ] [ 1, 2, 3 ]

y.pop();// AQUI FOI REMOVIDO UM VALOR DE Y E O X PERMANECE
console.log(x, y); // resultado: [ 1, 2, 3, 4 ] [ 1, 2 ]


// RESUMO DO SPREAD: FAZ COM QUE AMBOS TENHAM O MESMO DADO MAS NÃO ESTÃO
// NO MESMO VALOR DE DADOS SIMULTANEAMENTE, SE TORNAM INDEPENDENTES