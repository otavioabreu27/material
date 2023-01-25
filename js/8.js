const multiplica = (num, vezes) => {
    let total = 0
    for (let i=0; i < vezes; i++){
        total = total + num
    }
    return total
}

console.log(multiplica(0, 3))