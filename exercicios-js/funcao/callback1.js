const fabricantes = ["Mercedes", "Audi", "BMW"] // array

function imprimir(nome, indice) {   
    console.log(`${indice + 1}. ${nome}`) //template
}

fabricantes.forEach(imprimir) // callback
fabricantes.forEach(fabricantes => console.log(fabricantes))

/* forEach é uma função callback percorre todos os indices e chama a funcao a cada novo indice */