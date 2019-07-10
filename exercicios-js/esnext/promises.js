function falarDepoisDe(segundos, frase) {
    // corpo da requisição
    return new Promise((resolvp, reject) => {
        setTimeout(() => {
            //reject('erro') 
            resolvp(frase)
        }, segundos * 1000)

        // condicional que vai descidir se true or false
         //return .then(resolve()) 
         //       .catch(reject())
    })
}

falarDepoisDe(3, 'Que Legal!')
.then(frase => frase.concat('?!?')) // resolve
.then(outraFrase => console.log(outraFrase)) //then encadeado
.catch(e => console.log(e))//reject

const exemploPromise = (arg1, arg2) => {
        //corpo da função...

    return new Promise( (resolve, reject) => {
            arg1 ? resolve(arg2) : reject(err)
        } )
}
/*
exemploPromise(arg1, arg2)
    .then(resolve())
    .catch(reject())