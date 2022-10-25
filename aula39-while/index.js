

//while

function random (min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}





const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}




























//CÓDIGO ALEATÓRIO QUE PEGUEI PARA ANALIZAR
/*
function aleatoria (min, max) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
 
let tentativas = [];
let contador = 1;
let num;
let check = 2;
const min = 1;
const max = 5;
 
 
for (let i = 0; i <=50; i++) {
 
    do {
        num = aleatoria(min, max);
        if (num === check) tentativas.push(contador);
        //console.log(` numero ${num} na tentativa ${contador} `);
        contador ++ 
    } while (num !== check);
    
    contador = 0;

}
 
console.log(tentativas);  

*/