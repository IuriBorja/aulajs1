
//arrays


// as strings são indexçados por caracteres, exemplo:
//          0123
let nome = 'Iuri'

//console.log(nome[0]); // para acessar uma letra especifica, no caso I

// Enquanto que na array é por elemento, exemplo:
//                0       1         2       3
let alunos = ['André', 'Carlos', 'Anna', 'Maria'];

//console.log(alunos[2]); // para acessar um indice especifico dentro
// da array, nesse caso é Anna

alunos[0] = 'Athos'; // substitue pelo novo elemento criado, nesse caso
// entra o Athos no lugar do André
//console.log(alunos);

alunos.push('Iuri'); // o .push adiciona um elemento ao final do array 

alunos.unshift('Luiza'); // o .unshift adiciona um elemento no começo
// empurrando todos os outros elementos para traz e tornando nesse caso
// a Luiza como índice 0

alunos.pop(); // retira o ultimo elemento da array
let = removido = alunos.pop(); // ao fazer isso é possivel guardar o 
// elemento que foi retirado pelo .pop numa variavel

alunos.shift(); // remove o primeiro elemento da array

console.log(alunos.slice(0, 3)); // como pegar elementos em pedaços
// especificos de uma array , nesse caso é do elemento 0 ate o 2


alunos.splice(1, 0, 'RedPill'); // o .splice adiciona um elemento na array
// em um lugar especifico que escolher, exemplo:

// O 1 significa o numero do indice que quer mexer, ou seja, onde vai por
// o novo elemento, o 0 significa quantos
// elementos serão eliminados, que nao sera nenhum no nosso caso e por
// fim o novo elemento que será introduzido.




//console.log(alunos);