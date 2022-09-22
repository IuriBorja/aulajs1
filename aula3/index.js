/*


for(var i = 0; i < 11; i++) {
    console.log(`Número ${i}`);
}

//exe 35

var number = 42; 


for (var number = 42; number <= 50; number++) {
    if (number % 3 === 0) {
        console.log(number);
    }
}

// exe 36


var correctGuesses = 0;
var passwordLength = 4;


while (correctGuesses < 4) {
    var outcome = Math.ceil(Math.random() * 3);
    
    if (outcome === 1){
        correctGuesses ++;
        
        console.log('Found ' + correctGuesses + ' characters');
    }
    
    else if (outcome === 2){
        correctGuesses = 0;
        console.log('Starting over');
    }
    
    else if (outcome === 3) {
        correctGuesses = correctGuesses;
    }
}

if (correctGuesses === passwordLength) {
    console.log('Terminal hacked!');
}



*/


// ex 41

var powerRangers = ['Red', 'Black', 'Yellow', 'Pink', 'Blue'];



for (var i = 0; i < powerRangers.length; i++) {
    console.log( i + ':' + powerRangers[i]);
}


// ex 42

var xMen = ['Professor X', 'Cyclops', 'Beast', 'Iron-Man', 'Hobgoblin'];
var freelancers = ['Legion', 'Magneto'];



xMen.pop();
xMen.pop();


for (var i = 0; i < xMen.length; i++) {
    freelancers.push(xMen[i]);
}

console.log(freelancers);



//ex 46

var targetDisk = [ 'E', 'ø', '-', 'C', 'ø', 'o', 'r', 'ø', 'ø', 'p', '\'', 'ø', 's', ' ', 'E', 'v', 'ø', 'i', 'ø', 'ø', 'l'];
var newDisk = ['E',  '-', 'C', 'o', 'r', 'p', '\'', 's', ' ', 'E', 'v', 'i', 'l'];
var corruptionSymbol = 'ø';


for (var i = 21; i < targetDisk.length; i++) {
    newDisk.push(targetDisk[i]);
}

var i = newDisk.join('');
console.log(i);