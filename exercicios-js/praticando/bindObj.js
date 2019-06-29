const pessoa1 = {
    nome: 'Fabio Assuncao',
    falar() {
        console.log(this.nome)
    }
}
pessoa1.falar()
const pessoa2 = pessoa1.falar.bind(pessoa1)
/**
 * 
 * Funcao .bind() passa o contexto lexico para a nova funcao
 * armazena o this e passa como um atributo fixo
 */
pessoa2()

function funcionario() {
    this.contador = 0
    this.venda0 = 0
    this.venda1 = 1
    /////////// self substitui a necessidade do comando bind() /////////////
    self = this
    
    setInterval( function () {
        console.log(self.contador++, self.venda0)
        let aux = self.venda0
        self.venda0 = self.venda1
        self.venda1 += aux
    }/*.bind(this)*/, 100 ) 
}

new funcionario