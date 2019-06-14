// Exemplo de callback no browser
document.getElementsByTagName('body')[0].click = function (e) {
    console.log('O evento ocorreu!')
}