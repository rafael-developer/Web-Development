const moduloA = require('./122moduloA') //  require(nomeDoModulo)
const moduloB = require('./122moduloB') //  ./mesmo diretorio ../ sair da pasta

console.log(moduloA)
console.log(moduloA.ateLogo)
console.log(moduloA.bemVindo)
console.log(moduloA.ola)

console.log(moduloB)
console.log(moduloB.boaNoite())
console.log(moduloB.bomDia)