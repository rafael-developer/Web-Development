let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

// parametro unico nao precisa de parentese
dobro = a => 2 * a // arrow com retorno implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Ola!'
}

ola = () => 'Ola'
ola = _ => 'Ola' // underline eh considerado um parametro
console.log(ola())