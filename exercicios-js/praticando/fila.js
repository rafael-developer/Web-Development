/**
* criar fila; X
* inserir item; X
* remover item; X
* retornar fila vazia; X
* tamanho da fila;
* sequência armazenada. 
 * */

class criaFila {

    fila = [];
    primeiro = 0;
    ultimo = 0;
    total = 0;

    constructor(tamanho) {
        this.fila = new Array(tamanho);
        this.primeiro = 0;
        this.ultimo = 0;
        this.total = 0;
    };

    inserir(elemento) {
        fila[this.ultimo] = elemento;
        this.ultimo = (this.ultimo + 1) % fila.length;
        this.total++;
    };

    retirar() {
        elemento = fila[this.primeiro];
        this.primeiro = (this.primeiro + 1) % fila.length;
        this.total--;
    };

    isEmpty() {
        return this.total === 0;
    };

    isFull() {
        return this.total == fila.length;
    };

    tamanhoDaFila() {
        return this.total;
    };

    returnFila() {
        let vetor;
        for (const iterator of keyboard) {
            vetor = vetor + fila[iterator]
        }
        return vetor;
    }
};

let fila = new criaFila(4);

fila.inserir('Ana');
fila.inserir('Bruna');
fila.inserir('Clara');
fila.inserir('Debora');

console.log({fila});