// RECEBE OS LANÇAMENTOS DAS CONTAS

class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

// RECEBE O MÊS E ANO CORRENTE
class CicloFinanceiro {
    constructor (mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []   // RECEBE O SPREAD DO METODO .addLancamentos()
    }

    addLancamentos(...lancamentos) {    // Vai receber objetos da Classe Lancamentos
        lancamentos.forEach(l => this.lancamentos.push(l)) // Concatena os objetos no array this.lancamentos[]
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l =>  { valorConsolidado += l.valor })
        //  Faz o somatório com os atributos [valor] dos objetos recebidos por .addLancamentos()
        return valorConsolidado
    }
}

// Cria duas instâncias da Classe Lancamento
const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

// Instancia o ciclo Corrente
const contas = new CicloFinanceiro(6, 2018)
//  Faz o lançamentos das contas do mês na instância criada
contas.addLancamentos(salario, contaDeLuz)
//Executa o somatório
console.log(contas.sumario())