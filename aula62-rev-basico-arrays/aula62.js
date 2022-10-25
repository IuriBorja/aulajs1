


//revisão básica arrays


const nomes = ['Iuri', 'Joana', 'Maria', 'Ricardo', 'Dedé'];


const novo = nomes;

            
novo.pop(); //.pop elimina o ultimo elemento da array

novo.shift(); // .shift remove o primeiro elemento da array

novo.length // atributo length diz quantos elementos tem na array

novo.push('José'); // adiciona um novo elemento ao final da array

novo.unshift('Walace'); // adiciona um novo elemento ao inicio da array

novo.slice(1, 3); // .slice fatia o array, nesse exemplo ficaria
// 'Joana' e 'Maria', o slice também pode trabalhar com números 
// negativos ficando mais intuitivo começando de trás pra frente
//exemplo

novo.slice(1, -2);

console.log(novo);


//-------------------------------------
// tranformando uma string em uma array

const  nome2 = 'Iuri Marques Borja';

const result = nome2.split(' '); //.split serve para dividir a string

//ficando 'Iuri', 'Marques', 'Borja' e tornando ela uma array

console.log(result); // resultado: ['Iuri', 'Marques', 'Borja']

//-----------------------------------
// transformando uma array em uma string


const nomes3 = ['Iuri', 'Marques', 'Borja'];
const nomess = nomes3.join(' '); // .join vai unir todos os valores da 

//array, passando o elemento que vai ser o separador, no caso o espaço

console.log(nomess); // resultado : Iuri Marques Borja
































/*
let penultimo = [1,2,3,4,5].slice(-2, -1)[0];
console.log(penultimo);
*/