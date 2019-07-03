const alunos = [
    {nome:'João', nota: 7.3, bolsista: false},
    {nome:'Maria', nota: 9.2, bolsista: true},
    {nome:'Pedro', nota: 9.8, bolsista: false},
    {nome:'Ana', nota: 8.7, bolsista: true},
]

console.log(alunos.map(a => a.nota))    //  callback(valorAculumalito, segundo valor), valor inicial
const resultado = alunos.map(a => a.nota).reduce(function(acumular, atual ) {
    console.log(acumular, atual)
    return acumular + atual
}, 0)
//  reduce recebe dois parametros .reduce(callback(), value initial)

console.log(resultado)

/**
 * o valor zero é o valor start, depois o return vai para acumular
 */