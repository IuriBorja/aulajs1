//Filter -> Sempre retorna um array, com a mesma quantidade de 
//elementos ou menos.

//retorne os numeros maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10);

console.log(numerosFiltrados);

//retorne as pessoas que tem o nome com 5 letras ou mais
//retorne as pessoas com mais de 50 anos
//retorne as pessoas cujo nome termina com a

const pessoas = [
    { nome: 'Iuri', idade: 32},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47}
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 7);

const pessoasComMaisDe50 = pessoas.filter(obj => obj.idade > 50);

const pessoasTerminamComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
})

//.toLowerCase() transforma tudo em minuscula

//.endsWith() seleciona a string terminada com a determinada letra 
//colocada no parâmetro


console.log(pessoasComNomeGrande);

console.log(pessoasComMaisDe50);

console.log(pessoasTerminamComA);

