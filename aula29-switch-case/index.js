function getDaysText (day) {
    let diaSemanaTexto;

    switch (day) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        case 1:
            diaSemanaTexto = 'Segunda';
            break;
        case 2:
            diaSemanaTexto = 'Terça';
            break;
        case 3:
            diaSemanaTexto = 'Quarta';
            break;
        case 4:
            diaSemanaTexto = 'Quinta';
            break;
        case 5:
            diaSemanaTexto = 'Sexta';
            break;
        case 6:
            diaSemanaTexto = 'Sábado';
            break;        
        default:
            diaSemanaTexto = '';
            break;    
    }

    return diaSemanaTexto;
}


const data = new Date('1990-09-07 00:00:00');
const diaSemana = data.getDay();
const diaSemanaTexto = getDaysText(diaSemana);

console.log(diaSemana, diaSemanaTexto);







//--------------------------------------------


/*const diaDaSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
   
  const data = new Date();
   
  console.log(`Hoje é ${diaDaSemana[data.getDay()]}`);
  */