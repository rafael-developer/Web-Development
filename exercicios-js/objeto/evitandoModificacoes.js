//  Object.preventExtensions cria um objeto que não pode receber novos atributos
//  mas os valores podem ser modificados ou excluídos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
//  .isExtensible() metodo para saber se é passível de alteração. Nesse contexto não é...
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha' // alterar os values dos atributos funciona
produto.descricao = 'Borracha escolar branca'   // criar novos atributos não funciona
delete produto.tag  //  deletar os atributos funciona
console.log(produto)

//  Object.seal
//  OBJETO SELADO QUE OS ATRIBUTOS NÃO PODEM SER CRIADOS OU DELETADOS, SÓ ALTERADOS OS VALORES  
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selados:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes
// OBJETO TOTALMENTE CONSTANTE
Object.freeze()