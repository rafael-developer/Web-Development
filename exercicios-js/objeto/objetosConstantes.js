// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana }

Object.freeze(pessoa) // freeze deixa constante obj

pessoa.nome = 'Maria' // não pode alterar
pessoa.end = 'Rua ABC' // freeze n pode criar atributo
delete pessoa.nome // não pode excluir atributos

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)