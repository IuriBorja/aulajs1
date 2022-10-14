//Callback é uma função que será executada dentro de outra, no momento que você achar pertinente
//com objetivo de garantir que as funções sejam executadas na ordem correta
//Esse processo pode continuar quantas vezes você preferir, uma função, 
//que chama outra, que chama outra, etc (isso é chamado de callback hell, e não é algo muito bom)

//FUNÇÃO PARA DAR NUMEROS RANDONS DE 1000 A 3000
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min; 
    return Math.floor(num);
}

console.log(rand());

function f1(callback) {
    setTimeout(function() { //setTimeout chama uma função em determinado segundos, no caso os segundos randomicos da primeira função
        console.log('f1');
        if (callback) callback(); //callback
    }, rand());   //FUNÇÃO QUE DA NUMEROS RANDONS AQUI
}

function f2(callback) {
    setTimeout(function() { //setTimeout chama uma função em determinado segundos, no caso os segundos randomicos da primeira função
        console.log('f2');
        if (callback) callback(); //callback
    }, rand()); //FUNÇÃO QUE DA NUMEROS RANDONS AQUI
}

function f3(callback) {
    setTimeout(function() { //setTimeout chama uma função em determinado segundos, no caso os segundos randomicos da primeira função
        console.log('f3');
        if (callback) callback(); //callback
    }, rand()); //FUNÇÃO QUE DA NUMEROS RANDONS AQUI
}


//callback hell, estruta que dificulta o processo de leitura e manutenção

/*
f1(function() {
    f2(function() {
        f3(function() {
            console.log('ola mundo!');
        });
    });
});
*/


// maneira mais simples e melhor que callback hell

/*
f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('ola mundo!');
}

*/


//com arrow function

f1(()=> f2(()=>f3(()=>console.log('haha'))));