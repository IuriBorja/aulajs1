//Dobre os numeros

// .map faz a mesma coisa de .filter porem modifica os objetos originais


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);


//----------------------------


//Para cada elemento:

//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Iuri', idade: 32},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];


const nomePessoa = pessoas.map(obj => obj.nome);

const removeNome = pessoas.map(function(obj) {
    delete obj.nome;
    return obj;
});

const comIds = pessoas.map(function(obj, indice) {
    obj.id = indice;
    return obj;
})

console.log(nomePessoa);
console.log(removeNome);
console.log(comIds);












