const alunos = [
    {nome:'João', nota: 7.3, bolsista: false},
    {nome:'Maria', nota: 9.2, bolsista: true},
    {nome:'Pedro', nota: 9.8, bolsista: false},
    {nome:'Ana', nota: 8.7, bolsista: true},
]

// Desafio1 : Todos os alunos são bolsistas?
const bolsista = _ => _.bolsista
const allBolsista = (a, b) => a && b
const someBolsista = function(a, b)  {
    return a || b
}

const resultado1 = alunos.map(_ => bolsista(_)).reduce((a, b) => a && b)
console.log(resultado1)

//  Desafio2 : Algum aluno é bolsista?
const resultado2 = alunos.map(_ => bolsista(_)).reduce(someBolsista)
console.log(resultado2)