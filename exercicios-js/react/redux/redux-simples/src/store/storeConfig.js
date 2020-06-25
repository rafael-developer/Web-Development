import { createStore, combineReducers } from 'redux'

import numerosReducers from "./reducers/numeros";

/* combineReducers recebe um objeto 
chave: é o nome do estado da aplicação
valor: é a função responsável por gerar o estado
  */
/* independente da action ele chama todos os reducers */
const reducers = combineReducers({
    /* state: estado atual sem modificação
        action: string */
    numeros: function(state, action ){
        return numerosReducers(state, action)
    },

    nomes: function (state, action) {
        return [
            'Ana',
            'Bia',
            'Paula'
        ]
    }
})

/* quando chamar essa função ela vai criar o estado da aplicação a partir dos reducers */
function storeConfig() {
    return createStore(reducers)
}

export default storeConfig