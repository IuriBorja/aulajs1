// COMO CONCATENAR UMA ARRAY

// HÁ DUAS MANEIRAS


// PRIMEIRA
//exemplo


const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

//USANDO O METODO .concat

const a3 = a1.concat(a2);

console.log(a3);


//SEGUNDA
//exemplo

const a4 = ['a', 'b', 'c'];
const a5 = ['d', 'e', 'f'];

//USANDO ...spread
// spread é o mesmo que rest, aqui não se precisa por a palavra spread
//apenas os 3 pontos
const a6 = [...a4, ...a5];

console.log(a6);