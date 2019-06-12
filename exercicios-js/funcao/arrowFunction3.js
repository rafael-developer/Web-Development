let comparaComThis = function (parametro) {
    console.log(this === parametro)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj) // o this passa referencia para obj
comparaComThis(global) //   global !== this
comparaComThis(obj) //      obj === this

let comparaComThisArrow = parametro => console.log(this === parametro)  //arrow trava o this no modulo.exports
comparaComThisArrow(global) // this !== global
comparaComThisArrow(module.exports) // this === module.exports

comparaComThisArrow = comparaComThisArrow.bind(obj) //arrow eh mais forte que o .bind()
comparaComThisArrow(obj)
comparaComThisArrow(module.exports) // this continua apontando para o local que foi definida