// MÉTODO SPLICE

//                0       1         2        3       4        5
const nomes = ['Iuri', 'Wlamir', 'Laura', 'Iago', 'Igor', 'Bella'];


//o metodo .splice tem como estrutura o seguinte:

//nomes.splice(numero do índice que vai se iniciar a 
//remoção, quantidade de remoções, elementos que vao ser adicionados)

//ficando: .splice(indice, delete, elem1, elem2);

//nomes.splice(2, 2, 'Bidu', 'Boby');

//                0        1        2       3       4        5
//resultado: [ 'Iuri', 'Wlamir', 'Bidu', 'Boby', 'Igor', 'Bella' ]

//-------------------------------------------------------------


//outro exemplo:

//aqui foi criado uma var para receber os indices excluidos da array

//const removidos = nomes.splice(3, 2); // removendo a partir do indice 3, dois elementos

//console.log(nomes, removidos); // printando o array final e os excluidos

//               0         1        2        3           DELETADOS
//resultado: [ 'Iuri', 'Wlamir', 'Laura', 'Bella' ] [ 'Iago', 'Igor' ]



//-------------------------------------------------------------


//outro exemplo

// o Number.MAX_VALUE serve para excluir o resto

const removidos2 = nomes.splice(1, Number.MAX_VALUE);
// neste caso quero pegar apenas o indice 1 e excluir todos os outros

console.log(nomes, removidos2);
//               1                      DELETADOS           
//resultado: [ 'Iuri' ] [ 'Wlamir', 'Laura', 'Iago', 'Igor', 'Bella' ]