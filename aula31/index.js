// MAIS DIFERENÇAS ENTRE VAR E LET


//Let tem escopo de bloco {bloco}
//Var não respeita os blocos
//Exemplo:

/*
let nome = 'Iuri'; //criada let global, ou seja, fora de qualquer bloco
var nome2 = 'Iuri';


const verdadeira = true;
if (verdadeira) {
    let nome = 'Borja'; //o mesmo let porem dentro do escopo do bloco
    console.log(nome, nome2);//resultado: Borja Iuri
}

//o resultado de cima se da pelo fato do console.log estár dentro
//do mesmo escopo que a let, e com isso imprima apenas ela

console.log(nome, nome2);//resultado: Iuri Iuri

//O console.log de cima printa as variaveis globais, ou seja, as
//de fora do escopo da função 

*/

//OUTRO EXEMPLO:

let nome3 = 'João';
var nome4 = 'Silva';

const verdadeira2 = true;
if (verdadeira2) { // if 1
    //let nome3 = 'Miranda';
    //console.log(nome3, nome4);//resultado: Miranda Silva

    if (verdadeira2) { //if 2
        //let nome3 = 'Outra coisa';
        console.log(nome3, nome4);//resultado: Outra coisa Silva
    }
}

//o motor do JS procura o console.log mais proximo da variavel para
//printar, no caso da if 2, ele primeiro printa o que tem dentro
//do mesmo escopo, se não tiver ele vai para o proximo, que seria
//o if 1, se não tiver ele vai para fora do escopo do if e procura
//o global, se nao tiver a var que ele procura lá, ai sim da erro pois
//não foi encontrado nenhuma var com aquele nome (caso não tenha)



//RESUMO:

//Isso funciona:

// Contexto superior (qualquer nível)
const nome = 'Luiz';
 
{
  console.log(nome);
}
//Isso funciona:

{
  // Mesmo contexto
  const nome = 'Luiz';
  console.log(nome);
}
//Isso NÃO funciona porque a variável foi declarada em um 
//contexto diferente de onde estou chamando ela (fora das chaves)

// Contextos diferentes
{
  const nome = 'Luiz';
}
console.log(nome);