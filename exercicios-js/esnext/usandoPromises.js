// com promise
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            
            //fica escutando e concatenando
            res.on('data', dados => {
                resultado += dados
            })
    
            //quando escuta end ele chama a callback
            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                }catch(e) {
                    reject(e)
                }
            })
        })
    })
}
/*
let nomes = []
getTurma('A').then( alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then( alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C').then( alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})
*/

// retorna um array de array com o resultado de todas as promises
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas)) // concatena os arrays
    .then(alunos => alunos.map(aluno => aluno.nome)) 
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))

getTurma('D').catch(e => console.log(e.message))