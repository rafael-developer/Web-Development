// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //soma dois com undefined e retorna um NaN
imprimirSoma(2, 3, 5, 6, 8, 10) //le os dois primeiros e ignora o resto
imprimirSoma()

// Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2)) //usa o atributo b = 1 ja definido
console.log(soma()) //NaN