// MASCARA CONVERTE PARA REAL
function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor) // inserts two elements
    })
    return resultado.join('') // converte array em string
}

const preco = 29.9
const precoParcela = 11
const nome = 'Rafael'
console.log(real `1x de ${preco} ou 3x de ${precoParcela} ${nome}.`)