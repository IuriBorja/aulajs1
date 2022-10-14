// return
// Retorna um valor
// Termina a função



// AS DUAS FAZEM A MESMA FUNÇÃO, POREM A SEGUNDA SÓ
// PRINTA O RESULTADO, ENQUANTO QUE A PRIMEIRA
// RETORNA O VALOR ESPERADO

// COM VALORES PRINTADOS NÃO SE TEM O QUE FAZER COM ELES
// APENAS SÃO MOSTRADOS, NADA MAIS

function soma (a, b) {
    return a + b;
}

console.log(soma(3, 4));


function soma2 (a, b) {
    console.log(a + b);
}

soma2(3, 4);

//-----------------------------------------


// EXEMPLO DE FUNÇÃO QUE NÃO RETORNA NADA MAS É ÚTIL
// COMO MUDAR A COR DE FUNDO DO BODY POR EXEMPLO

/*
document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
});
*/
//--------------------------------------------


// FUNÇÃO COM UM OBJETO

function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

const p1 = criaPessoa('Iuri', 'Borja');

const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
};

console.log(typeof p1);
console.log(typeof p2);



//------------------------------------


// UMA FUNÇÃO DENTRO DE OUTRA FUNÇÃO
// AO FAZER UMA ANALOGIA, É COMO AQUELES BONECOS RUSSOS
// ONDE AO ABRIR UM SEMPRE TEM OUTRO DENTRO
// ATÉ FICAREM PEQUENOS E NÃO TER MAIS PARA TIRAR

function falaFrase (comeco) {
    function falaResto (resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}


// A VAR olaMundo SE TORNOU UMA FUNÇÃO, E AO POR O ARGUMENTO
// 'MUNDO!' É COMO SE SOMASSE, POIS O VALOR 'OLÁ' JÁ ESTÁ
// EMBUTIDO NO olaMundo

// FICARIA ASSIM DE OUTRA MANEIRA

//const fala = falaFrase('olá');
//const resto = fala('mundo!');

const olaMundo = falaFrase('olá');
console.log(olaMundo('mundo!'));


//--------------------------------------------------


// FUNÇÕES QUE DUPLICA, TRIPLICA E QUADRIPLICA UM DETERMINADO VALOR

function duplica(n) {
    return n * 2;
}

function triplica(n) {
    return n * 3;
}

function quadriplica(n) {
    return n * 4;
}

console.log(duplica(5));
console.log(triplica(5));
console.log(quadriplica(5));



console.log('##################');
// OUTRO EXEMPLO POREM CRIANDO APENAS UMA FUNÇÃO 
// QUE FAÇA A CONTA E QUE EU SÓ PRECISE DAR
// O MULTIPLICADOR


function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

const duplica1 = criaMultiplicador(2);
const triplica1 = criaMultiplicador(3);
const quadriplica1 = criaMultiplicador(4);


console.log(duplica1(5));
console.log(triplica1(5));
console.log(quadriplica1(5));



//-------------------------------------------



//FAZENDO VÁRIOS TESTES

function somaMais (somador) {
    return function(x) {
        return x + somador;
    }
}


const result = somaMais(5);


console.log(result(10)); //RESULTADO 15


//------------------------------------------


function nomeEmbutido(nome) {
    return function(embutido) {
        return nome + ' ' + embutido;
    }
}

const meuNome = nomeEmbutido('Iuri');


console.log(meuNome('Borja')); // RESULTADO 'Iuri Borja'


//-----------------------------------------



function division(divisor) {
    return function(y) {
        return y / divisor;
    }
}


const divPor2 = division(2);
const divPor5 = division(5);
const divPor7 = division(7);


console.log(divPor2(80), divPor5(50), divPor7(77)); // RESULTADO 40, 10 ,11





function bonecos1 (a) {
    return function (b){
        return a + b;
}
}

const recebe = bonecos1(5);

console.log(recebe(10)); // RESULTADO 15

