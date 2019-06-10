const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums) {
    if (x == 5) {
        break   //desvia o fluxo para fora do laco
    }
    console.log(`${x} = ${nums[x]}`)
}

for(y in nums) {
    if (y == 5) {
        continue    // interrompe o laco e pula para proxima repeticao
    }
    console.log(`${y} = ${nums[y]}`)
}

// break e continue causam DESVIO DE FLUXO

externo: //rotulo
for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo // break com rotulo
        console.log(`Par = ${a},${b}`)
    }
}