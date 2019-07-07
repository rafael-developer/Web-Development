const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anonimo!\n') //output terminal
    process.exit() 
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {  //input terminal 
        const nome = data.toString().replace('\r\n', '')

        process.stdout.write(`fala ${nome}!!\n`)
        process.exit()
    })
}