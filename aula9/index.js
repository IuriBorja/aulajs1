// String, number , undefined, null, boolean
const nome = 'Iuri'; // String
const nome1 = "Iuri" // String
const nome2 = `Iuri` // String

const num1 = 10; // Number
const num2 = 10.52 // Number 

let nomeAluno; // undefined -> não aponta para local nenhum na memória
const sobreNomeAluno = null; // Nulo -> não aponta para local nenhum na memória
const aprovado = false; // Boolean = true , false (lógico)

let a = [1,2];
const b = a;

console.log(a, b);

a = 5;

console.log(a, b);