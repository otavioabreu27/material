const simbolo_mais = (vezes) => {
    str_mais = ""
    for (let i=0; i<vezes; i++){
        str_mais = str_mais + "+"
    }
    return str_mais
}

console.log(simbolo_mais(8))