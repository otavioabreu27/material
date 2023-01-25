function filtaPorQtdDeDigitos(arr_numeros, qtd){
    let novo_arr = arr_numeros.filter(function(e){
        return (String(e).length == qtd)
    })
    return novo_arr
}

console.log(filtaPorQtdDeDigitos([2, 31, 190, 20, 2, 4000], 1))