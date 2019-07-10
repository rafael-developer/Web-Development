// callback ->- promise ->- async/await
const fs = require('fs')

console.log(1)

function callback(err, contents) {
    console.log(typeof contents)
}

// fs.readFile('./int1.txt', (err, content) => console.log(err, String(content)))

const readFile = file => new Promise((resolve, reject) => {
    
    fs.readFile(file, (err, contents) => {
        console.log(4)
        if (err) {
            reject(err)
        }else {
            resolve(contents)
        }
    })
})

readFile('./int1.txt')
    .then(contents => {
        console.log(null, String(contents))
    })

console.log(2)

console.log(3) 