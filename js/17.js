const soma_numeros = (arr) => {
    let soma = 0
    let i = 0

    while (i < arr.length){
        soma = soma + arr[i]
        i++
    }

    return soma
}

console.log(soma_numeros([2,3,4,5]))