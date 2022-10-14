//PARAMETROS DA FUNÇÃO



// A FUNÇÃO DEFINIDA COM A PALAVRA FUNCTION TEM UMA
// VARIÁVEL ESPECIAL QUE SE CHAMA ARGUMENTS
// QUE SUSTENTA TODOS OS ARGUMENTOS ENVIADOS

function funcao () {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
//funcao(1, 2, 3, 4, 5, 6, 7);



//----------------------------------



function funcao1 (a, b = 3, c = 5) {
    console.log(a + b + c);
}
//funcao1(5);




//---------------------------------




function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
        //console.log(acumulador);
    }
    console.log(acumulador);
}

conta('+', 1, 20, 30, 40, 50);

//--------------------------------------



// UM EXEMPLO DE FUNÇÃO PARA SE FAZER UMA TABUADA
// args nesse exemplo é o mesmo que arguments, entretanto com o operador rest (...)
// pode usar em qualquer função, diferente do arguments q só pode nas funções normais
// com as que iniciam com function
const conta2 = (...args)=>{
    console.log(`Argumentos que foram passados: ${args}`)  
    for (let valor of args) {
        console.log(`${valor} * 2 = ${valor*2} `)
    } 
}
conta2(1,2,3,4,5,6,7,8,9)
