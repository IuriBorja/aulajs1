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


