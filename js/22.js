const funcaoDaSorte = (num) => {
    min = 0
    max = 10
    let num_sort = Math.floor(Math.random() * (max - min) + min)
    if (num_sort == num){
        return `Parabéns! O número sorteado foi o ${num_sort}`
    } else {
        return `Que pena! O número sorteado foi o ${num_sort}`
    }
}

console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(7))