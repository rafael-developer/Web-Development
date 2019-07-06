const fs = require('fs')
const produto = {
    nome:'Celular',
    preco: 1249.99,
    desconto: 0.15
}

const fileNameJson = (nome,local = __dirname) => local + '/' + nome + '.json'

fs.writeFile(fileNameJson('arquivoGerado'), JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})

/**
 *  .writeFile(local + name, obj p/ string(obj), (callback erro))
 *  (err || 'Arquivo salvo!') se err for false print 'string'
 *  não deu erro "err = null = false"
 */