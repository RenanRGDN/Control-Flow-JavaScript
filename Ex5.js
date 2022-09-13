const prompt = require('prompt-sync')();

let number = parseInt(prompt('Type the number '));

if(number % 2 == 0) {

    number = Math.sqrt(number,2)
     console.log('Par')
     console.log(`${number}`)
} else {
    
    number = Math.pow(number,2)
    console.log('Impar')
    console.log(`${number}`)
}