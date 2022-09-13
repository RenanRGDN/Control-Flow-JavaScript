const prompt = require ('prompt-sync')()
const n1 = parseInt (prompt('Digite o primeiro número:'))
const n2 = parseInt (prompt('Digite o segundo número :'))
const n3 = parseInt (prompt('Digite o terceiro número :'))

if (n1>n2) {
    if(n1>n3)
    console.log (`O maior resultado é ${n1}`)
}
    if(n2>n1){
        if (n1>n3)
        console.log (`O maior resultado é ${n2}`)
}
if (n3>n2){
    if(n3>n2)
    console.log (`O maior resultado é ${n3}`)

}
