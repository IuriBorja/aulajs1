

// For in -> lê os índices(array) ou chaves(objeto)

//EXEMPLO COM OBJETOS:

const pessoa = {
    nome: 'Iuri',
    sobrenome: 'Borja',
    idade: 32,
    endereco: 'Rua das colves'
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}


//EXEMPLO COM ARRAYS:


const frutas = ['Maçã', 'Pêra', 'Uva', 'Laranja'];

for (let feira in frutas) {
    console.log(frutas[feira]);
}
