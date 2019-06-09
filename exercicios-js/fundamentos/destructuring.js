// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
// tirar os atributos nome, idade do Objeto pessoa
const { nome, idade } = pessoa
console.log(nome, idade)

// tirar os atributos e salva em variaveis n, i
const { nome: n, idade: i } = pessoa
console.log(n, i)

// setando valor padrao caso esteja undefined
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

// acessando atributos aninhados
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa
console.log(ag, num)