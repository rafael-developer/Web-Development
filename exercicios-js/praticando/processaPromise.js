// callback ->- promise ->- async/await
const fs = require('fs')

console.log(1)

function callback(err, contents) {
    console.log(err, String(contents))
}

fs.readFile('./in1.txt', )

console.log(2)

console.log(3) 