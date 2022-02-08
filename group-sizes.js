const prompt = require('prompt-sync')();

let size = Number(prompt("Enter the class size "));

if (size % 3 === 0){
    console.log("You will have " + size/3 + " groups of 3.");
}else if (size % 3 === 1){
    console.log("You will have " + (size - 4)/3 + " groups of 3 and 2 groups of 2.");
}else if (size % 3 === 2){
    console.log ("You will have " + (size -2)/3 + " groups of 3 and one group of 2.");
}