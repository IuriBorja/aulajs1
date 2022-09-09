/*
Iuri Marques Borja tem 32 anos, pesa 76 kg
tem 1.7 de altura e seu IMC é de 26.29757785467128
Iuri Marques nasceu em 1990.
 */

const primeiroNome = 'Iuri Marques';
const segundoNome = 'Borja';
const idade = 32;
const peso = 76;
const altura = 1.7;
const anoAtual = 2022;

let imc; //peso / (altura * altura)

imc = peso / (altura * altura);

let anoNascimento;

anoNascimento = anoAtual - idade;

//console.log(anoNascimento);
//console.log(imc);

console.log(primeiroNome + ' ' + segundoNome + ' tem ' + idade + ' anos, ' + 'pesa ' + peso + ' kg tem ' + altura + ' de altura e seu IMC é de ' + imc + '.');
console.log(primeiroNome + ' ' + 'nasceu em ' + anoNascimento + '.');