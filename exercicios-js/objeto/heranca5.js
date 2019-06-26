console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// Criando função ou method .reverse() na classe String (usou prototype para acessar o protótipo String)
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
//  .split('') transforma string em array. função da classe String
//  .reverse() inverte o array             função da classe Array
//  .join('')  junta o array em um string  função da classe Array
}

console.log('Escola Cod3r'.reverse())

// Criando method capturar primeiro elemento do Array
Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

// Sobrescrevendo method já existentes na API   NÃO FAZER!!!
String.prototype.toString = function() {
    return 'Lascou tudo'
}
// Efeitos colaterais inesperados na API
console.log('Escola Cod3r'.reverse())

