const recebe_pares = (arr) => {
    let i = 0
    let novo_arr = []
    while (i < arr.length){
        if (i % 2 == 0 && arr[i] % 2 == 0){
            novo_arr.push(arr[i])
            i++
        } else {
            i++
        }
    }
    return novo_arr
}

console.log(recebe_pares([2,3,1,4,4]))