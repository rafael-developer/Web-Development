let invisivel // não é compartilhado no modulo apenas o que está dentro do module.exports

module.exports = {
    bomDia: 'Bom dia',  // property
    boaNoite() {    // method
        return 'Boa noite'
    }
}