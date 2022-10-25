


//funções


// funções executam ações, geralmente é pegar um valor com ela e gerar
// outro de volta, tem funções que não retornam valores também

// exemplo sem return, apenas exibindo uma resposta

function saudacao (nome) {
    console.log(`Bom dia ${nome}!`);
}

//saudacao('Iuri');

// com return

function saudacao1 (nome1) {
    return `Bom dia ${nome1}!`;
}

// aqui estou guardando o resultado de return numa variavel e ao chama-la,
// terá o resultado de 'Bom dia Iuri!'
const variavel = saudacao1('Iuri');

//console.log(variavel);


// Criando uma função de soma


function soma(x, y) { //aqui criamos no parametro dois dados, x e y
    const resultado = x + y; //aqui avisamos o que queremos fazer com o x, y
    return resultado; // aqui queremos retornar o valor de resultado
}

//console.log(soma(5, 5)); // aqui chamamos a função colocando no parametro
// (no caso 5, 5) o que queremos


// outro exemplo colocando valores fixos no parametro

function soma2(x = 1, y = 1) {
    const resultado2 = x + y;
    return resultado2;
}

//console.log(soma2()); // a saída se torna 2, pois ao não por nenhum valor
// especifico no parametro de saida, a função soma x e y como 1, quando
// se poe valores especificos no parametro, ai sim os 1 de x e y são
// anulados




// função anonima é quando se cria uma dentro de uma variavel, exemplo:


const raiz = function (n) {
    return n ** 0.5;
}

console.log(raiz(9));


// arrow function é uma abreviação da função.
// Segue exemplo da mesma função de cima usando arrow function

const raiz2 = n => n ** 0.5;


console.log(raiz2(9));

