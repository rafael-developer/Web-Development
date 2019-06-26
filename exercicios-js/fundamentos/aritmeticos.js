const [a, b, c, d] = [3, 5, 1, 15]
const param1 = 6
const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2

console.log(soma, subtracao, multiplicacao, divisao, modulo)

const parOuImpar = (param1) => param1 % 2 != 1 ? 'Par' : 'Impar'
const result = parOuImpar(3)
console.log(result)

console.log(`Modulo: ${a} % 2 = ${modulo}`)