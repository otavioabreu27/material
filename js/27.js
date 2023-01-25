const inverter = (objeto) => {
    let novo_obj = {}
    for (const key in objeto) {
        console.log(key, objeto[key])
        novo_obj[objeto[key]] = key
    }
    return novo_obj
}

console.log(inverter({a: 2, b: 20, x: 3}))