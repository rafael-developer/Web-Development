function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i] // array que recebe os parametros
        // foi substituido pelo operador Rest Spread
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 2.2, "Teste")) // concatena o resultado com o string
console.log(soma('a', 'b', 'c')) 
