const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c, d: '37' }
const obj2 = { a, b, c }
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)
console.log(obj3.nota)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

// Criação de objetos
const obj5 = {
    funcao1: function() {
        // ...
    },
    funcao2() { 
        // ...ES2015
    }
}

console.log(obj5)