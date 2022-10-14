//Factory function (Função fábrica)
//Constructor function (Função construtora)


function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre NADA') {
            return `${this.nome} está ${assunto}.`;
        },

        altura: a,
        peso: p,

        //Getter -> transforma uma função em um atributo para apenas so obter um valor
       get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}



const p1 = criaPessoa('Iuri', 'Borja', 1.7, 76);
const p2 = criaPessoa('Igor', 'Borja', 1.8, 86);
const p3 = criaPessoa('Iago', 'Borja', 1.8, 70);



console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);