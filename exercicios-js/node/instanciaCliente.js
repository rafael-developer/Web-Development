const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')
//                require('./instanciaUnica') retorna um obj
/**
 *  module.exports = {
 *       valor: 1,
 *       inc() {
 *           this.valor++
 *  }} 
 */

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()
//                require('./instanciaNova') retorna uma função que aplicando o () vai retornar um obj
/**
 * module.exports = () => {
 *   return {
 *      valor: 1,
 *       inc() {
 *           this.valor++
 *       }
 *  }}
 */

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)