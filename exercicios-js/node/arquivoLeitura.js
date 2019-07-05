const fs = require('fs') //  fs - lib nativa do node manipulação de arquivos FILESYSTEM

const caminho = __dirname + '/arquivo.json' // __dirname representa o diretorio atual do node
// __dirname variavel de chama caminho está presente em todos os diretorios do node

// SINCRONO...  NÃO USAR EM ARQUIVOS GRANDES
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// ASSINCRONO...
fs.readFile(caminho, 'UTF-8', (err, conteudo) => {
    
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json') // JÁ TRÁS O JSON CONVERTIDO EM OBJETO
console.log(config.db)

fs.readdir(__dirname, (err, files) => {
    console.log('Conteúdo da pasta...')
    console.log(files)
})