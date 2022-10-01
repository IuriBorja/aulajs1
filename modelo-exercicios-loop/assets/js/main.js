
//aqui temos uma array com 4 objetos dentro

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];



const container = document.querySelector('.container'); // o querySelector selecia apenas um elemento
//no caso de classes será a primeira classe que for encontrada com o nome container

const div = document.createElement('div'); // criando uma div


//agora vamos iterar, ou seja, percorrer o array "elementos"
//com o for

for (let i = 0; i < elementos.length; i++) {
     let { tag, texto } = elementos[i]; //capturando a tag e o texto (ambos dentro de um objeto) em uma variavel via desestruturação
     let tagCriada = document.createElement(tag); //a cada loop do for vai se criar um elemento
     tagCriada.innerHTML = texto; //colocando um texto dentro da tag
     div.appendChild(tagCriada); //colocando o elemento dentro da div que foi criada
}


// COLOCANDO A DIV NO CONTAINER
container.appendChild(div);


/**
 *  RESUMO DA TAREFA
 * 
 * 1 - SELECIOU O CONTAINER
 * 
 * 2 - CRIOU A DIV
 * 
 * 3 - CRIOU AS TAGS DENTRO DO FOR, UM LOOP QUE VAI SER EXECUTADO
 * EM TODOS OS ELEMENTOS DA CONST "ELEMENTOS"
 * 
 * 4 - E A CADA INTERAÇÃO DO LAÇO, CADA VOLTA, É CRIADO UMA TAG
 * BASEADO NO QUE ESTÁ DENTRO DO OBJETO E ADICIONA O TEXTO DENTRO
 * 
 * 5 - DEPOIS DE TODAS AS TAGS CRIADAS SE ADICIONA ESSAS
 * TAGS DENTRO DA DIV QUE FOI CRIADA , AO POR DENTRO DO LOOP
 * SEMPRE QUE TIVER UMA INTERAÇÃO DO LAÇO SERA COLOCADO UMA NOVA 
 * TAG DENTRO DA DIV
 * 
 * 6 - POR FIM COLOCAR A DIV NO CONTAINER
 * 
 */
