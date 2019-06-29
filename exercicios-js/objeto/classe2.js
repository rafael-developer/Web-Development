class Avo {
    constructor(sobrenome) { //     METODO CONSTRUTOR RECEBE ARGS QUANDO OBJ EH INSTANCIADO
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) ///////////// METODO SUPER ////////////// 
        this.profissao = profissao
    }
}   //      METODO SUPER() CHAMA O CONSTRUTOR DA CLASSE PAI

class Filho extends Pai {
    constructor() {
        super('Silva') 
    }
}
const filho = new Filho
console.log(filho, Avo.sobrenome) // >> Filho { sobrenome: 'Silva', profissao: 'Professor' } undefined