const segundoMaior = (arr_numeros) => {
    arr_numeros.sort(function(a, b){return b-a});

    let highest = arr_numeros[1];

    return highest
}

console.log(segundoMaior([2, 3, 80, 150, 1230]))