const filtra_numeros = (arr) => {
    let i = 0
    novo_arr = []

    while (i < arr.length) {
        if (typeof(arr[i]) == "number"){
            novo_arr.push(arr[i])
            i++
        } else {
            i++
        }
    }

    return (novo_arr)
}

teste = ["1231", 12, "#$%!#JIE", 1, 3]

console.log(filtra_numeros(teste))
