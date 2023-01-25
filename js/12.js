const removerPropriedade = (objeto, chave) => {
    delete objeto[chave]
    let novo_objeto = objeto
    return novo_objeto
}

let a = {
    teste: "isso é um teste",
    1: 34,
    3: "sane"
}

console.log(removerPropriedade(a, "teste"))