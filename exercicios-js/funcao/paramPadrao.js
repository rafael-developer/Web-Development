// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// estrategia 2, 3 e 4 para gerar valor padrao
function soma2(a, b, c) {
    // op. ternario (se a for diferente de undefined ? true (a) : false (1)
    a = a !== undefined ? a : 1 // usando != ele tambem pega o valor null
    b = 1 in arguments ? b : 1 // 1 in arguments segundo argumento (b)
    c = isNaN(c) ? 1 : c // mais segura (is not a number)
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padr'ao do es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))
