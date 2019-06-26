const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))
//JSON.stringify() transforma o objeto em String

//  console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
//  console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))
/*
*           valores e textos entre aspas duplas 
*           pode passar objetos e arrays desde que devidamente estruturados  
*/