let num1 = prompt('Digite um número:');
let num2 = prompt('Digite outro número:');


num1  = Number(num1);
num2 = Number(num2);

const resultado = num1 + num2;


alert('O resultado da soma é: ' + resultado + '.');



let nome = prompt('Diga seu primeiro nome:');
let nome2 = prompt('Agora diga seu segundo nome:');

const resultado2 = nome + nome2;

alert('Seu nome é: '+ nome + ' ' + nome2);



let anoNascimento = prompt('Me diga seu ano de nascimento:');
let anoAtual = 2022;

anoAtual = Number(anoAtual);

const idade = anoAtual - anoNascimento;


alert('UAU, voce tem ' + idade + ' !! ' + 'Tá ficando velho kakaka.');




// DE MANEIRA SIMPLIFICADA
// NESSE EXEMPLO USA-SE O SINAL DE + NA FRENTE DO PROMPT
// PARA TRANSFORMAR EM NUMERO

// E USANDO O TEMPLATE STRING PARA JÁ FAZER O CALCULO SEM PRECISAR
// CRIAR UMA VARIAVEL PARA ISSO

let num3 = +prompt('manda um numero ai');
let num4 = +prompt('manda outro');


alert(`ta ai a soma! ${num3 + num4}`);