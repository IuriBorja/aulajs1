
// UMA FUNÇÃO SEMPRE IRÁ PROCURAR OS DADOS DE FORA
// AO CONTRÁRIO NÃO SERÁ POSSIVEL, POIS AO
// ESTAR DENTRO, ESTARÁ PROTEGIDA PELO ESCOPO
// ENTRETANTO ELA CONSEGUE PASSAR DE FUNÇÃO
// PARA FUNÇÃO



const nome = 'Iuri'; // AQUI TEMOS UMA VARIAVEL GLOBAL

function falaNome() {
   // const nome = 'Borja'; // AQUI AO CRIAR UMA VAR DENTRO DO ESCOPO E CHAMA-LA COM A OUTRA FUNÇAO LOGO ABAIXO, SERA REPRODUZIDA
    console.log(nome); // AQUI ESTAMOS CHAMANDO A VARIAVEL GLOBAL DENTRO DO ESCOPO DE UMA FUNÇÃO
}


function usaFalaNome() {
    const nome = 'Borja'; // MAS AQUI AO CRIAR UMA VAR DENTRO DO ESCOPO ELA É IGNORADA E CHAMA
    // A DO ESCOPO GLOBAL , const nome = 'Iuri; POIS O MESMO VAR ESTA SENDO CHAMADO NA PRIMEIRA FUNÇÃO

    falaNome(); // AQUI ESTOU CHAMANDO A FUNÇÃO DE CIMA NO ESCOPO DESSA
}

usaFalaNome(); // AQUI CHAMO A FUNÇÃO   


//----------------------------------



//Escopo léxico é simplesmente a maneira que a função usa para resolver nomes de variáveis 
//em funções aninhadas... As funções mais internas, contém também o escopo das funções mais externas...



// Escopo global
function a(msg) {
  // Escopo léxico de a é acessível em b
  return function b(algoEmB) {
    // Escopo léxico de b e a são acessíveis em c
    return function c(algoEmC) {
      console.log(msg, algoEmB, algoEmC);
    };
  };
}
//Se nomes de variáveis colidirem, o escopo mais interno é resolvido como resolução:

function falaNome(nome) {
  // Veja que nome colide com nome
  // Quem será usado é nome no escopo interno
  return function (nome) {
    // Esse nome será usado
    console.log(nome);
  };
}
 
falaNome('Luiz')('Ana Sofia'); // Ana Sofia



//Ela busca primeiro no escopo dela, depois no escopo maior, maior e assim por diante até terminar todos os escopos.