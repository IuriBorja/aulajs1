//ESTRUTA DE REPETIÇÃO CLASSICA DO FOR

/*
 1 - PRIMEIRO CRIA-SE UMA VARIAVEL DE CONTROLE i(index)
COM UM DETERMINADO VALOR
 2 - CRIAR UMA CONDIÇÃO PARA PARAR O LAÇO(LOOP)
 3 - E POR FIM INCREMENTAR OU DECREMENTAR A VARIAVEL
*/

/*
for (let i = 0; i <= 10; i++) {
    console.log(`Número ${i}`);   
}
*/

//OUTRO EXEMPLO USANDO A CHECAGEM DE NUMEROS PARES

/*
for (let i = 0; i <=10; i++) {
    const par = i % 2 === 0 ? 'par':'impar';
    console.log(i, par);
}
*/

//EXEMPLO COM INDICE DE ARRAYS

//O ATRIBUTO .length DA A TOTALIDADE DE ÍDICES DOS ARRAY


const frutas = ['Uva', 'Pera', 'Melancia', 'Laranja'];

                        
for (let i = 0; i < frutas.length; i++) {
    console.log(i, frutas[i]);
}


