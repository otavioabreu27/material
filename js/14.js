const obj_to_array = (obj) => {
    let arr_total = []
    for (let key in obj) {
        let arr_pair = [key, obj[key]]
        arr_total.push(arr_pair)
    }
    return arr_total
}

teste = {
    "chave1": "valo1",
    "chave2": "valo2",
    "chave3": "valo3"
}

console.log(obj_to_array(teste))