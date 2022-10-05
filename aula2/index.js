
let random = Math.floor(Math.random() * 4);

//console.log(random);

let passWord = 'jojo';

let monday = 'mdn';
let sunday = 'snd';
let saturday = 'strd';


switch (random) {
    case 1:
        console.log(`${passWord}${monday}`);
        break;
    case 2:
        console.log(`${passWord}${sunday}`);
        break;
    case 3:
        console.log(`${passWord}${saturday}`);
        break;
    default:
        console.log('');
        break;    
}






//------------------------------------------------



function conhecimento (livro1, livro2, livro3) {
    const resultado = livro1 * livro2 * livro3;
    return resultado
}

function merecimento (dias, horas) {
    const resultado = dias + horas;
    return resultado
}


const valorConhecimento = merecimento (5, 3); 
const salario = conhecimento(15, 20, 15);

const somatorio = valorConhecimento + salario;

console.log(somatorio);