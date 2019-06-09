const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!'
const template = `
Ola
${nome}!`
console.log(concatenacao, template)

//expreessoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() //funcao
console.log(`Ei... ${up('cuidado')}!`)