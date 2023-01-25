// Recebe o objeto estudante e suas notas, as notas estarão em um array
// deve-se calcular a média e retornar um objeto com nome e media do aluno que teve
// o melhor desempenho
let estudantes = {
    Joao: [8, 8, 9, 8],
    Maria: [10, 10, 10, 10],
    Carlos: [4, 9, 2, 4],
    Laura: [6, 6, 2, 4]
}

function receberMelhorEstudante(objeto) {
    const calculaMedia = (arr_notas) => {
        let total = 0
        for (let i=0; i < arr_notas.length; i++){
            total = total + arr_notas[i]
        }
        return (total / arr_notas.length)
    }

    maiorMedia = ""

    for (const chave in objeto) {
        objeto[chave] = calculaMedia(objeto[chave])
        console.log(chave, objeto[chave], maiorMedia)

        // Inicializa o maiorMedia
        if (maiorMedia == ""){
            maiorMedia = chave
        }

        // Caso a média seja menor que a média na chave x vira a maior média
        if (objeto[chave] > objeto[maiorMedia]) {
            maiorMedia = chave
            console.log(objeto[chave])
            console.log(maiorMedia)
        }
    }

    let entradas = Object.entries(objeto).filter(arr => arr[0] == maiorMedia)
    entradas = ([].concat(entradas[0]))
    let objeto_final = {}
    objeto_final[entradas[0]] = entradas[1]
    return objeto_final
}

console.log(receberMelhorEstudante(estudantes))