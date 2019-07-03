//  IMPLEMENTANDO METODO MAP()
Array.prototype.map2 = function(callback) {
    let meuArray = []
    for(let i = 0; i < this.length; i++) {
        meuArray.push(callback(this[i], i, this))
    }
    return meuArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//  Retornar um array apenas com os preços

//  transforma JSON em OBJECT
const paraObjeto = json => JSON.parse( json )

const pegaPreco = produto => produto.preco

const resultado = carrinho.map2( objString => paraObjeto( objString ) ).map2( objeto1 => pegaPreco( objeto1 ))
console.log(resultado)
