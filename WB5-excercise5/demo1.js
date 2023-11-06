let numbers = [7, 9, 64, 60, 12, 13, 65, 62]

let firstNameOver60;

for ( let i=0; i< numbers.length; 1++){
    if (numbers[i] > 60){
        firstNameOver60 = numbers[i]
        break;
    }
}
console.log(`The first number over 60 is ${firstNameOver60}`);

function isover60(someValue){
    return (someValue > 60);
}

let firstNameOver60usingFind = numbers.find(isover60);

//without a loop

let firstNumberOver60usingFind = numbers.find(isover60);
let firstNumberOver60usingFindIndex = numbers.findIndex(isover60);



console.log(`The first number over 60 is ${firstNameOver60usingFind}`);



// question: what did find do for us? 

// question: how to use of 