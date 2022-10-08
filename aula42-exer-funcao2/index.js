/*
Escreva uma função chamada ePaisagem que recebe dois argumentos, largura
e altura de uma imagem (number).

Retorne true se a imagem estiver no modo paisagem.
*/

// paisagem = deitada , retrato = em pé
// paisagem = largura > altura
// retrato = altura > largura


function ePaisagem (largura, altura) {
    if (largura > altura) {
        return true;
    } else {
        return false;
    }
}

console.log(ePaisagem(10,8));


//REFATORANDO A MESMA FUNÇÃO

const retrato = (largura, altura) => largura > altura;


console.log(retrato(500, 100));