const soma_despesa = (arr) => {
    let soma = 0
    let i = 0
    while (i < arr.length) {
        let dict = arr[i]
        soma = soma + dict["preco"]
        i++
    }
    return soma
}

console.log(soma_despesa([
    {"nome": "pipipipopopo",
    "preco": 2340},
    {"nome": "pipipipopopo",
    "preco": 1230},
]))
