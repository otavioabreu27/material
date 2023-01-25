const no_meio = (numero, minimo, maximo, inclusivo=false) => {
    if (inclusivo == true) {
        if (numero >= minimo && numero <= maximo){
            return true
        } else {
            return false
        }
    } else {
        if (numero > minimo && numero < maximo){
            return true
        } else {
            return false
        }
    }
}

console.log(no_meio(60, 50, 100))
console.log(no_meio(40, 50, 100))
console.log(no_meio(50, 50, 100))
console.log(no_meio(50, 50, 100, true))