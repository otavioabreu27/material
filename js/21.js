const menor = (arr) => {
    let menor = arr[0]
    let i = 0
    while (i < arr.length){
        if (arr[i] < menor){
            menor = arr[i]
            i++
        } else {
            i++
        }
    }
    return menor
}

console.log(menor([10, 5, 35, 65]))
console.log(menor([5, -15, 50, 3]))
