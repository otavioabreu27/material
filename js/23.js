const contaPalavra = (frase) => {
    let arr_palavras = frase.split(" ")
    let qtd_palavras = arr_palavras.length
    return qtd_palavras
}

console.log(contaPalavra("Array de Palavras Teste"))