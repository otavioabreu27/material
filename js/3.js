const salario = (horas, sal_hora) => {
    total_salario = horas * sal_hora
    return `Salário igual a R$${total_salario}`
}

console.log(salario(150, 40.5))