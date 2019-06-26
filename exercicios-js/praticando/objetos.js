const umObj = {
    nome: 'Rafael',
    nasc: '24/03/1993',
    idade: 26
}
// instanciando um obj sem função contrutora
const obj1 = umObj
console.log(obj1.__proto__)

///// instanciando com funcao construtora /////
function Construtor(nome) {
    this.nome = nome
}

const obj2 = new Construtor('Rafael')
console.log(obj2.__proto__)


