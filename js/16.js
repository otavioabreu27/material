const bissexto = (ano) => {
    if (ano % 4 == 0) {
        if (ano % 100 == 0 && ano % 400 == 0){
            return true
        } else if (ano % 100 != 0) {
            return true
        } else {
            return false
        }
    }
}

console.log(bissexto(2020))
console.log(bissexto(2100))