const schedule = require('node-schedule')

/**
 * scheduleJob('seg min hr dia mes diaDaSemana')
 *  /5 = a cada 5seg
 * se colocar so 5 dispara apenas no seg 5
 */

const tarefa1 = schedule.scheduleJob('*/5 * 23 * * 6', function () {
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelamento Tarefa1!')
}, 20 * 1000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0, 6)]
regra.hour = 23
regra.second = 17

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})

