//Closures é basicamente a capacidade de uma funcao ter uma outra funcao e essa funcao ter
//a capacidade de acessar o escopo lexico e retorna dentro 
//dessa funcao, alguma coisa que esteja no escopo lexico.



const nome = 'global';        // global com mesmo nome da variavel no escopo


function retornaFuncao() {
    const nome = 'iuri';
    
    return function () {
        return nome;        // retorno o nome que esta no escopo lexico
    }
}

const funcao = retornaFuncao(); // retorna a funcao anonima

console.dir(funcao()); // executa 


//------------------------------------------------------------



//OUTRO EXEMPLO

function retornaFuncao1(nome) {
    return function () {
        return nome;
    };
}

const funcao1 = retornaFuncao1('Iuri');
const funcao2 = retornaFuncao1('Marques');
const funcao3 = retornaFuncao1('Borja');

console.log(funcao1());
console.log(funcao2());
console.log(funcao3());



//--------------------

//testando outro exemplo


function teste (seila) {
    return seila;
}


const teste1 = teste('bora');
const teste2 = teste('toma');
const teste3 = teste('uma');


console.log(teste1, teste2, teste3);