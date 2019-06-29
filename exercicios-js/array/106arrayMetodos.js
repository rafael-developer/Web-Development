const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

////////    .POP()    ////////
pilotos.pop()   // REMOVE O ULTIMO ELEMENTO DO ARRAY
console.log(pilotos)

////////    .PUSH()     ///////////
pilotos.push('Verstappen') // ADD O ULTIMO ELEMENTO
console.log(pilotos)

////////    .SHIFT()        /////////
pilotos.shift() // REMOVE O PRIMEIRO
console.log(pilotos)

////////    .UNSHIFT()      /////////
pilotos.unshift('Hamilton') // ADD O PRIMEIRO ELEMENTO
console.log(pilotos)

// SPLICE PODE ADICIONAR E REMOVER ELEMENTOS

// adicionar ADD
pilotos.splice(2, 0, 'Bottas', 'Massa') ///////  .splice(init, delete, add,...)     ///////
console.log(pilotos)

// remover
pilotos.splice(3, 1)    //  massa quebra
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //////  novo array a partir do indice 2 ate o fim  /////////
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)   //  .slice(init, ++fim) o fim n entra no novo array
console.log(algunsPilotos2)
