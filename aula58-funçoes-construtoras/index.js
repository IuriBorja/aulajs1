//Função construtora -> objetos
//Função fabrica -> objetos
//Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) { // por conveniência, ao criar função construtora se usa a primeira letra maiuscula
    //Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function() {};

    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Iuri', 'Borja');
const p2 = new Pessoa('x', 'z');

console.log(p1.nome);
console.log(p2);