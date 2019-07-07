const sequence = {
    __id: 1,
    get id() { return this.__id++ }
}

// array de produtos
const produtos = {}

function salvarProduto(produto) {   // produto {}
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto  
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
// se id nao existir return obj vazio
}

function getProdutos() {
    return Object.values(produtos)
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }
// as 3 funcoes estao visiveis fora do modulo, menos o obj sequence