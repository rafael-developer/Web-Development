const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}
//////////////////////////////////////////
// Fn procura a variavel dentro e depois//
// fora de onde foi declarada a funcao  //
// contexto léxico                      //
/////////////////////////////////////// //

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()