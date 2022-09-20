function teste (x=1, y=1) {
    const resultado = x * y;
    return resultado;
}

const resultado2 = teste(3, 5);

console.log(resultado2);


const obj = {
    nome: 'Iuri',
    sobrenome: 'Borja',
    idade: 32
};

console.log(obj[1]);