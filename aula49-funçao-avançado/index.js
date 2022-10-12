// Declaração de função (Function hoisting) (pode chamar a função no  começo ou no final)

//falaOi(); -> posso chama-la antes de declara-la ou depois que não faz diferença

function falaOi () {
    console.log('Oi');
}

falaOi();


//First-class objects (objetos de primeira classe)
// Criar uma expressão como um dado, criar uma função dentro de uma variável
//Function expression

const souUmDado = function() {
    console.log('Sou um dado.');
}; 

souUmDado();


//Passando uma função como parâmetro
// Podemos tratar a função como um dado naturalmente, podemos passar para outra função, retornar etc

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:');
    funcao(); // executando o parâmetro e não a função em si
}
executaFuncao(souUmDado);


//Arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow();


//Dentro de um objeto

const obj = {
    falar: function() {
        console.log('Estou dentro de um obj');
    }
};

obj.falar();