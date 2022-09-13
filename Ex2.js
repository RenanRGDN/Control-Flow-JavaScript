const prompt = require('prompt-sync')();

const num1 = parseInt (prompt(`Escreva o primeiro número: `));
const num2 = parseInt (prompt(`Escreva o segundo número: `));
const num3 = parseInt (prompt(`Escreva o terceiro número: `));

if (num1 <= num2 && num2 <= num3){
    console.log(`${num1}`);
    console.log(`${num2}`);
    console.log(`${num3}`);
}
else if (num1 <= num3 && num3 <= num2){
    console.log(`${num1}`);
    console.log(`${num3}`);
    console.log(`${num2}`);
}
else if (num2 <= num1 && num1 <= num3) {
    console.log(`${num3}`);
    console.log(`${num2}`);
    console.log(`${num1}`);
}
else if (num2 <= num3 && num3 <= num1) {
    console.log(`${num2}`);
    console.log(`${num3}`);
    console.log(`${num1}`);
}
else if (num3 <= num1 && num1 <= num2) {
    console.log(`${num3}`);
    console.log(`${num1}`);
    console.log(`${num2}`);
}
else if (num3 <= num2 && num2 <= num1) {
    console.log(`${num3}`);
    console.log(`${num2}`);
    console.log(`${num1}`);
}