const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) // this aponta para o objeto pessoa
    }
}

pessoa.falar() // >> Bom dia!
const falar = pessoa.falar  // cria uma nova funcao sem referencia para o this
falar() // >> undefined   (conflito entre paradigmas: funcional e POO)


const falarDePessoa = pessoa.falar.bind(pessoa)  
falarDePessoa()

/*
*   Funcao .bind() mantem o this da nova funcao no mesmo contexto lexico da antiga
*   mantendo a nova funcao apontando para a componente que declarou a funcao inicial
*/