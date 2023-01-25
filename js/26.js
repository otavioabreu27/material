const removerVogais = (palavra) => {
    let vogais = ["a", "e", "i", "o", "u"]
    let palavra_final = palavra

    for (let cont=0; cont < vogais.length; cont++) {
        palavra_final = palavra_final.replaceAll(vogais[cont], "")
    }

    return palavra_final
}

console.log(removerVogais("bonito"))