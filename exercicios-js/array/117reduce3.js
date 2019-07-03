Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1 // analisa o valor verdade de valorInicial
    let acumulador = valorInicial || this[0]    // recebe o valorInicial de true ou this[0] se false
    for(let i = indiceInicial; i < this.length; i++) {
        
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}
const alunos = [
    {nome:'João', nota: 7.3, bolsista: false},
    {nome:'Maria', nota: 9.2, bolsista: true},
    {nome:'Pedro', nota: 9.8, bolsista: false},
    {nome:'Ana', nota: 8.7, bolsista: true},
]

console.log(alunos.map(a => a.nota))   
const resultado = alunos.map(a => a.nota).reduce2(function(acumular, atual ) {
    console.log(acumular, atual)
    return acumular + atual
})
console.log(resultado)

// segundo teste somatorio
const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log('segundo teste:',nums.reduce2(soma, 21))