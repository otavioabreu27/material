const repetir = (repete, vezes) => {
    arr = []
    for (let i=0; i<vezes; i++){
        arr[i] = repete
    }
    return arr
}

console.log(repetir("teste", 2))