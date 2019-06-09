// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) { // Funcao anonima
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implicito. Se funcao tiver apenas uma linha podemos escrever de maneira implicita
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a) // arrow function com um atributo
imprimir2('Hi!!!')