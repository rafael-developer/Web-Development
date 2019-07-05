console.log(module.exports) //  module.exports começa como um objeto vazio

console.log(module.exports === this)
console.log(module.exports === exports)
// this, exports são variaveis que tem como referencia o objeto module.exports

//  adicionando atributos por meio de referencia
this.a = 1
exports.b = 2
module.exports.c = 3

//  exports é uma variavel que aponta para o obj module.exports
exports = null // desinstanciando exports de module.exports{}
console.log(exports)    // aponta pra null
console.log(module.exports) //continua com os atributos
// exports aponta para outro objeto (null), mas module.exports continua cm os atributos

//  exports apontando para um obj qualquer
exports = {
    nome: 'Teste'
}
// não altera o module.exports
console.log(module.exports)

// module.exports aponta para um novo obj
module.exports = { publico: true }

// this não aponta mais para module.exports
this.novoAtt = 'Novo atributo!'

console.log(this)

//////// tomar cuidado com o module.exports //////////