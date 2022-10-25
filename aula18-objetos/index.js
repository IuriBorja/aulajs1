


//objetos



function teste (x=1, y=1) {
    const resultado = x * y;
    return resultado;
}

const resultado2 = teste(3, 5);

//console.log(resultado2);


const obj = {
    nome: 'Iuri',
    sobrenome: 'Borja',
    idade: 32
};

obj['Sexo'] = 'Masculino';

//console.log(obj.nome);




// EXEMPLO DE FUNCTION COM UM OBJETO DENTRO


function criaPessoa (nome, sobrenome, idade) {
    return {  //aqui pode-se criar assim: return {nome, sobrenome, idade};
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };   
}

const pessoa1 = criaPessoa('Iuri', 'Borja', 32);
const pessoa2 = criaPessoa('Laura', 'Borja', 64);
const pessoa3 = criaPessoa('Wlamir', 'Borja', 62);
const pessoa4 = criaPessoa('Iago', 'Borja', 24);
const pessoa5 = criaPessoa('Igor', 'Borja', 35);


//console.log(pessoa2.nome + ' e ' + pessoa3.nome + ' são pais de ' + pessoa1.nome + ', ' + pessoa4.nome, 'e ' + pessoa5.nome + '.');



// QUANDO UMA FUNÇÃO ESTA DENTRO DE UM OBJETO É CHAMADO DE MÉTODO
// EXEMPLO:

const ficha = {
    nome: 'Iuri',
    sobrenome: 'Borja',
    idade: 32,


    fala() {  // NOTE QUE NÃO PRECISOU USAR A PALAVRA FUNCTION
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

//ficha.fala();
//ficha.incrementaIdade(); AQUI VOCE ESTÁ CHAMANDO A FUNÇÃO


//console.log(ficha.incrementaIdade()); AQUI VOCE ESTA PRINTANDO, O QUE 
// DARA UNDEFINED, VISTO QUE VOCE NÃO CHAMOU A FUNÇÃO E SIM APENAS
// TENTOU PRINTAR ALGO QUE NÃO FOI ATIVADO, POIS SO SE ATIVA AO CHAMA-LA



const ind = {     
    nome: "Iuri",     
    sobrenome: "Borja",     
    idade: 32,     
    
    fala() {         
    console.log(`Eu sou ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`)     
    }
    };

    
    ind.fala();

