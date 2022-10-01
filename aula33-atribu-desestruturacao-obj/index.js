//EXEMPLO DE COMO USAR OBJETOS COM ARRAYS

/*
const numeros = {
    inteiros: [1,2,3,4,5,6],
    reais: [1.1,2.2,3.3,4.4,5.5]
};
 
const {inteiros: [um,,tres,...restoInteiros], reais: [umReal,,tresReal,...restoReais]} = numeros
 
console.log(um,tres,restoInteiros,umReal,tresReal,restoReais);
*/

//---------------------------------------


const pessoa = {
    nome: 'Iuri',
    sobrenome: 'Borja',
    idade: 32,
    endereco: {
        rua: 'Av Brasil',
        numero: 106
    }
};

//Atribuição via desestruturação
const {nome, endereco, ...resto} = pessoa;
console.log(resto);
