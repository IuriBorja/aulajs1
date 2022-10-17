// loop for

for (let i = 0; i < 5; i++) {
    console.log(i);
}


console.log('*****************');
// do-while

let iterator = 0;
do {
    iterator++;
    console.log(iterator);
} while (iterator < 5);

console.log('*****************');
//while 


let iterator1 = 0;
while (iterator1 < 5) {
    iterator1++;
    console.log(iterator1);
}


console.log('*****************');
//for...in

const array = [1, 2, 3];

for (let arr in array){
    console.log(arr);
}


console.log('*****************');
//for...of

const array1 = [1, 2, 3, 4];

for (let arr of array1) {
    console.log(arr);
}