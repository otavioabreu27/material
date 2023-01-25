const calcularMedia = (arr) => {
    let i = 0
    let soma = 0
    let tamanho = arr.length
    while (i < tamanho) {
        soma = soma + arr[i]
        i++
    }
    return (soma / tamanho)
}

console.log(calcularMedia([5, 5, 7]))