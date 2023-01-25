// Intentifica palavras semelhantes
// funcao("palavra_pra_buscar", ["Palavras para consultar"])

const buscarPalavrasSemelhantes = (busca, palavras) => {
    let palavras_encontradas = palavras.filter(e => e.includes(busca))
    return palavras_encontradas
}

console.log(buscarPalavrasSemelhantes("pro", ["projeto", "protecao", "alce"]))