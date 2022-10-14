//Ao criar um função IIFE, você cria uma funcão que é executada automaticamente.
//Tudo que estiver dentro do escopo dessa função não poderá ser tocado por códigos externos.

// IIFE -> Immediately invoked function expression

// ESSA FUNÇÃO É PARA PROTEGER TODO O SEU CODIGO DO ESCOPO GLOBAL
//E É CRIADA DENTRO DE UM PARENTESES SEGUIDO DE OUTROS DOIS PARENTESES NO FINAL
//EXEMPLO


(function(){
    //AQUI VAI SEU CÓDIGO INTEIRO
})();


//OUTRO EXEMPLO


(function(idade, peso, altura) { //DA PARA POR PARÂMETROS NELA

    const sobrenome = 'Borja';

    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Iuri'));
    }

    falaNome();
    
    console.log(idade, peso, altura); //AQUI PRINTANDO OS ARGUMENTOS, OU SEJA, TUDO DENTRO DELA

})(32, 74, 1.71); //AQUI VAO OS ARGUMENTOS, DENTRO DO OUTRO PARENTESES CRIADO