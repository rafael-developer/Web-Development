/////////// FIZ MEU PROPRIO FOREACH  ////////////// 

Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
        /**
         * a função existe a partir de uma instancia do Array
         * o refencia para a instancia usando o this
         */
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    
})