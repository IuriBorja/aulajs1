const inicio = 10;
const fim  = 25;
 
const soma = [1, 2];
const resultado = [];
 
let atual = inicio;
let indice = 0;
for (let i = 0; i <= fim - inicio; i++) {
   
  resultado.push(atual);
  atual = atual + soma[indice];
  indice = indice === 0 ? 1 : 0;
}
 
function callbackFilter(valor) {
    if(valor <= fim) {
        return true;
    }
    else {
        return false
    }
}
 
const resultadoFinal = resultado.filter(callbackFilter)
 

console.log(resultadoFinal);