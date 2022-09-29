
const h1 = document.querySelector('.container h1');
const data = new Date();




function diaSemanaTexto(day){
switch (day) {
    case 0:
        diaSemanaTexto = 'domingo';
        break;
    case 1:
        diaSemanaTexto = 'segunda-feira';
        break;
    case 2:
        diaSemanaTexto = 'terça-feira';
        break;
    case 3:
        diaSemanaTexto = 'quarta-feira';
        break;
    case 4:
        diaSemanaTexto = 'quinta-feira';
        break;
    case 5:
        diaSemanaTexto = 'sexta-feira';
        break;
    case 6:
        diaSemanaTexto = 'sábado';
        break;        
    default:
        diaSemanaTexto = '';
        break;    
}

return diaSemanaTexto;
}


function getNomeMes(numeroMes){
    let nomeMes;
    switch (numeroMes) {
        case 0:
            nomeMes = 'janeiro';
            return nomeMes;
        case 1:
            nomeMes = 'fevereiro';
            return nomeMes;
        case 2:
            nomeMes = 'março';
            return nomeMes;
        case 3:
            nomeMes = 'abril';
            return nomeMes;
        case 4:
            nomeMes = 'maio';
            return nomeMes;
        case 5:
            nomeMes = 'junho';
            return nomeMes;
        case 6:
            nomeMes = 'julho';
            return nomeMes;
        case 7:
            nomeMes = 'agosto';
            return nomeMes;
        case 8:
            nomeMes = 'setembro';
            return nomeMes;
        case 9:
            nomeMes = 'outubro';
            return nomeMes;
        case 10:
            nomeMes = 'novembro';
            return nomeMes;
        case 11:
            nomeMes = 'dezembro';
            return nomeMes;
        default:
            return ;
    }      
    
    //return nomeMes;
}


function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}


function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = diaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()}` +
        ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    );
}




h1.innerHTML = criaData(data);



//OUTRA MANEIRA MAIS SIMPLES DE FAZER


/*
const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});
*/