const resultado = nota => nota >= 7 ? 'AAprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))


/*
*   resultado eh uma constante que recebe uma funcao anonima tipo arrow
*   onde nota eh um parametro unico que pode omitir os parenteses
*   e o simbolo => utilizado para indicar a expressao ternaria
*   nota >= 7 eh uma expressao logica, o simbolo de ' ? ' indica o operador ternario
*   que retorna 'Aprovado' caso true e 'Reprovado' caso false
*/