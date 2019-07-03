const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//  Retornar um array apenas com os preços

const resultado1 = carrinho.map( e => JSON.parse( e ) ).map( e => e.preco )
console.log( resultado1 )

//  transforma JSON em OBJECT
const paraObjeto = json => JSON.parse( json )

const pegaPreco = produto => produto.preco

const resultado2 = carrinho.map( objString => paraObjeto( objString ) ).map( objeto1 => pegaPreco( objeto1 ))
console.log(resultado2)

// UNDERLINE É CONSIDERA UM PARAMETRO VALIDO
const resultado3 = carrinho.map( _ => paraObjeto(_) ).map( _ => pegaPreco(_) )
console.log(resultado3)