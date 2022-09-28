// CRIANDO UMA FUNÇÃO DENTRO DE OUTRA

//NESSE EXEMPLO FOI CRIADO 3 FUNÇOES PARA FAZER CONTA DE 
//ADIÇAO, MULTIPLICAÇAO E DIVISAO

//POR FIM FOI CRIADO OUTRA FUNÇAO PARA IDENTIFICAR O TIPO DE CALCULO
//SE ERA SOMA , MULT OU DIV COM O ARGUMENTO CHAMADO "OPERATION"
//E COM ISSO AO CHAMAR A FUNÇAO E COLOCAR OS 3 ARGUMENTOS
//SE FAZ O CALCULO ESPERADO


var add = function (operand1, operand2) { // FUNÇAO DE ADIÇAO
    return operand1 + operand2;
};


var multiply = function (operand1, operand2) { // FUNÇAO DE MULTI
return operand1 * operand2;
};


var division = function (operand1, operand2) { // FUNÇAO DE DIV
return operand1 / operand2;
};



var calculate = function (operand1, operand2, operation) { // FUNÇAO PARA USAR O TERCEIRO ARGUMENTO QUE É O "OPERATION",
  var result = operation(operand1, operand2);              //ONDE O MESMO QUE SELECIONA O TIPO DE CALCULO     
console.log(result);
};


calculate(4,4,add); // OPERAND1, OPERAND2, OPERATION(SOMA)
calculate(5,5,multiply); // OPERAND1, OPERAND2, OPERATION(MILTI)
calculate(50,10,division); // OPERAND1, OPERAND2, OPERATION(DIV)