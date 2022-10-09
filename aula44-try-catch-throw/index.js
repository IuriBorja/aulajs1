/**
 O RESUMO DESTA AULA É ENSINAR A PEGAR O ERROR E MODIFICAR SUA SAÍDA

 AO INVÉS DE SER AQUELES VÁRIOS NUMEROS E LETRAS QUE O USUARIO NÃO 
 SABERÁ INTERPRETAR

 AO CAPTURAR O ERRO, EDITE A SAIDA PARA UMA INFORMAÇÃO QUE O USUARIO
 ENTENDA
 */


function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números.')
        //AQUI LANÇA O ERRO SE CASO O USUARIO NAO COLOQUE UM NUMERO
    }
    return x + y;
}

try { // COM O TRY SE POE A PARTE QUE ESTA DANDO O ERRO
    console.log(soma('1', 2)); //AQUI ESTÁ UMA STRING QUANDO ERA PRA SER NUMERO
} catch (error) { //CATCH CAPTURA O ERRO E DENTRO DO ESCOPO PODE-SE CRIAR UMA NOVA SAIDA PARA AQUELE ERRO PARA Q O USUSARIO ENTENDA
    
    //console.log(error); // AQUI PRINTA O ERRO P USUARIO, NÃO FAÇA ISSO
    console.log('Alguma coisa mais amigável pro usuário.');
    //AQUI PRINTE ALGO MAIS AGRADAVEL AO USUÁRIO
}