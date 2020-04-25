/**
* criar fila; X
* inserir item; X
* remover item; X
* retornar fila vazia; X
* tamanho da fila;
* sequência armazenada. X
 * */

class criaFila {

    fila = [];
    primeiro = 0;
    ultimo = 0;
    tamanho = 0;

    constructor(tamanho) {
        this.fila = new Array(tamanho + 1);
        this.primeiro = 0;
        this.ultimo = 0;
        this.tamanho = 0;
    };

    inserir(elemento) {
        this.fila[this.ultimo] = elemento;
        this.ultimo = (this.ultimo + 1) % this.fila.length;
        this.tamanho++;
    };

    retirar() {
        let elemento = this.fila[this.primeiro];
        this.primeiro = (this.primeiro + 1) % this.fila.length;
        this.tamanho--;
    };

    isEmpty() {
        return this.tamanho === 0;
    };

    isFull() {
        return this.tamanho == fila.length;
    };

    tamanhoDaFila() {
        console.log(this.tamanho);
    };

    returnFila() {
        let lista = "";
        let position = this.primeiro;
        while(!(position == this.ultimo)){
            lista += " " + this.fila[position];
            position = (position + 1) % this.fila.length;
        }
        console.log(lista);
    }
};

let fila = new criaFila(4);

fila.inserir('Ana');
fila.inserir('Bruna');
fila.inserir('Clara');
fila.inserir('Debora');
fila.retirar();
fila.retirar();
fila.inserir('Evellyn')
fila.inserir('Fernanda')
fila.retirar();
fila.inserir('Malu')
fila.returnFila();
fila.retirar();

console.log(`tamanho da fila ${fila.tamanho}`)