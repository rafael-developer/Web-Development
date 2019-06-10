// funcao em JS eh First-Class Object (Citizens)
// Higher-order function

//criar de forma literal
function fun1() { }

// Armazenar em uma variavel
const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar funcao como parametro
const obj = {}  //objeto vazio
obj.falar = function () { return 'Opa' } // cria dinamicamente o atributo que recebe uma funcao
console.log(obj.falar())    


// Passar funcao como parametro
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') }) // declara e passa a funcao como parametro


// Um funcao pode retornar/conter uma funcao
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4) // (4) eh o parametro da funcao (c)
//ou
const retornaFuncao = soma(2, 3) // armazenou a funcao em uma constante
retornaFuncao(4)