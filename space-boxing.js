const prompt = require('prompt-sync')();
const weight = prompt ("Input weight: ");
const planetWeight = Number (weight);
const choice = Number ( prompt ("Input planet number: "));

if (choice === 1) {
    let result = planetWeight * 0.78;
    console.log (result);
}else if (choice === 2){
    let result = planetWeight * 0.39;
    console.log ( result );
}else if (choice === 3){
    let result = planetWeight * 2.65;
    console.log (result);
}else if (choice === 4){
    let result = planetWeight * 1.17;
    console.log (result);
}else if (choice === 5){
    let result = planetWeight * 1.05;
    console.log (result);
}else if (choice === 6);{
let result = planetWeight * 1.23;
console.log (result);
}
