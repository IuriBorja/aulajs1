//Escreva uma função que recebe 2 números e retorne o maior deles

function numeros (x, y) {
    if (x > y) {
        return x;
    } else if (x < y) {
        return y;
    } else {
        return x, y;
    }   
}


console.log(numeros(3,5));



//MESMA FUNÇÃO TOTALMENTE REFATORADA (MELHORADA)

const max = (x, y) => x > y ? x : y;
console.log(max(3,8));