const bool_num = (value) => {
    let tipo = typeof(value)
    if (tipo == 'boolean'){
        if (value == true){
            return false
        } else {
            return true
        }
    } else if (tipo == 'number'){
        if (value != 0) {
            return (value * -1)
        } else {
            return 0
        } 
    } else {
        return `Booleano ou numero esperados, mas o parametro e do tipo ${tipo}`
    }
}

console.log(bool_num(false))
console.log(bool_num(0))
console.log(bool_num("teste"))