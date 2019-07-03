const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

// .filter() tem o callback igual ao map()
//  suporta return boolean
console.log(produtos.filter(function(p) {
    return false
}))

const caro = _ => _.preco >= 500
const fragil = _ => _.fragil

const result = produtos.filter(caro).filter( fragil )
console.log(result)