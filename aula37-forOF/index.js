
//For of sempre mostrará o valor do índice, fazendo iteração
//(grupos de valores que podem ser percorridos um a um, 
// como arrays e strings)


// ******O FOR OF NÃO FUNCIOA COM OBJETOS POIS NÃO É ITERADO******

const nome = 'Iuri Borja';

for (let pessoa of nome) {
    console.log(pessoa); // resultado: I u r i   B o r j a
}



//For clássico - Geralmente com iteráveis (array ou strings)

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]); // resultado: I u r i   B o r j a
}


//-----------------------------------------------------


//For in - Retorna o índice ou chave (string, array ou objetos)

for (let pessoa in nome) {
    console.log(nome[pessoa]); // resultado: I u r i   B o r j a
}




//For of - Retorna o valor em si (iteráveis, arrays ou strings)

for (let pessoa of nome) {
    console.log(pessoa); // resultado: I u r i   B o r j a
}
