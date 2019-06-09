// Var tem escopo Global e de funcao
var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
/*
* dentro = 2
* fora = 2
*/