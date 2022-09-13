// O EXERCICIO SE PROPOE A FAZER É POR A varA na varB, a varB na varC
// E POR FIM A varC na varA , COMO AO FAZER O PASSO A PASSO OS DADOS DE
// varA SE PERDEM, DEVE-SE CRIAR UMA NOVA VARIAVEL PARA SALVAR O DADO
// DA VARIAVEL varA, E ASSIM ATRIBUILA A varC.


let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let varD = varA; 

// UMA FORMA DE RESOLVER É CRIANDO UMA VARIAVEL E GUARDANDO O DADO DA varA 
// NELA


/*
varA = varB;
varB = varC;
varC = varD;
*/

// OUTRA MANEIRA MAIS AVANÇADA DE RESOLVER:

[varA, varB, varC] = [varB, varC, varA];


console.log(varA, varB, varC);


