const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
const notasBaixas1 = []
for (let i in notas) {
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i]) // ,push() add novo elemento ao array
    }
}

console.log(notasBaixas1)

// com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

// com callback curta com arrow

const notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas3)

// funcional

const notasBaixas4 = nota => nota < 7
//const resultado = notas.filter(notasBaixas4) // usando outra variavel

console.log(notas.filter(notasBaixas4))