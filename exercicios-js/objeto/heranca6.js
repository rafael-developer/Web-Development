// build function (fn construtora)
function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)


// SIMULANDO O NEW ( METODO CONSTRUTOR )
// o operador {...} é usado para receber os ultimos argumentos e concatenar em um Array
function novo(f, ...params) {
    const obj = {} //cria um objeto vazio

    obj.__proto__ = f.prototype // passa a referência por herança __proto__ -> .prototype
    // a partir de agora obj tem os atributos da função f()

    f.apply(obj, params)    // .apply() executa a Função f
                            // .apply() recebe um Objeto e um Array de argumentos
                            // ela vai executar Aula(nome, videoID) == obj(Array params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)

console.log(aula3, aula4)
console.log(aula3.__proto__)