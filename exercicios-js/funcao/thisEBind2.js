function Pessoa() {
    this.idade = 0  //  .bind(this) aponta para esse this, que por sua vez aponta para Pessoa()

    const self = this
    setInterval(function() {
        self.idade++    // usando self no lugar do this para n precisar usar .bind(this)
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // 1000 milissegundo = 1 segundo
}

new Pessoa

/*
*   setInterval() esta recebendo uma funcao que incrementa ++ ao atributo this.idade
*   que por sua vez eh chamada a cada segundo
*/