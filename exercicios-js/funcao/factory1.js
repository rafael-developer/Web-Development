// Factory simples
function criarPessoa() {    // função fabrica
    return {        // retorna um objeto
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())