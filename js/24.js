const contarCaractere = (caractere, frase) => {
    let cont_vezes = 0
    let i = 0
    while (i < frase.length){
        if (frase.charAt(i) == caractere){
            cont_vezes ++
            i++
        } else {
            i++
        }
    }
    return cont_vezes
} 

console.log(contarCaractere("r", "A sorte favorece os audazes"))
console.log(contarCaractere("c", "Conhece ti a ti mesmo"))

