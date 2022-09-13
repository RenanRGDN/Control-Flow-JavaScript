const prompt = require ('prompt-sync')();

const idade = Number(prompt('Digite qual é a idade: '))

if(idade>=10 && idade <=14){
    console.log('infantil');
}
else if (idade>=15 && idade<=17){
    console.log('Juvenil');
}
else if (idade >=18 && idade <=25){
    console.log ('Adultoo');
}
