// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))

//Arrow Function (this) no caso module.exports
const lexico1 = (e) => console.log(this === e)
const lexico2 = lexico1.bind({})
const c = 10
lexico1(module.exports)
lexico2(module.exports)

// parametro default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais forte')

// Operador Rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))