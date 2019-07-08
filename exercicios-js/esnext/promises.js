function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //reject('erro')  //return .then(resolve()) .catch(reject())
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que Legal!')
.then(frase => frase.concat('?!?')) // resolve
.then(outraFrase => console.log(outraFrase)) //then encadeado
.catch(e => console.log(e))//reject