const prompt = require ('prompt-sync')();
let numero = parseInt (prompt('Digite um número: '));

if (numero% 2==0){
    numero = Math.sqrt(numero,2);
    console.log ('O número é par')
    console.log(`${numero}`);
}else{
    numero = Math.pow (numero,2)
    console.log('O número é impar')
    console.log(`${numero}`)
}