/*
let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

[a, b, c] = [b, c, a];

console.log(a, b, c);
*/

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

const [um , ,tres , ,cinco ,...resto] = numeros;

//podemos pular o indice da array colocando um espaço vazio
//seguido das virgulas


//operador resto é para pegar o resto que sobrou da array
//é feito com tres pontos segudio de resto > ...resto

console.log(um,tres,cinco,resto);



//--------------------------------


//MODO COMUM DE ACESSAR UM ARRAY DENTRO DE UM ARRAY

const numeros2 = [
    [1 ,2 ,3 ,4],
    [5 ,6 ,7 ,8 ,[18 ,20 ,[500]]],
    [9 ,10 ,11 ,12]
];

console.log(numeros2[1][4][2][0]);


//MODO DE DESESTRUTURAÇAO DE ACESSAR UMA ARRAY


const numeros3 = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
const [lista1, lista2, lista3] = numeros3;
console.log(lista3[2]);


//cria-se uma variavel como array, e dentro desse array se poe
//as atribuições para representar a var numeros3
//com isso ao printar, basta por uma das atribuiçoes seguido
//do numero do indice da array