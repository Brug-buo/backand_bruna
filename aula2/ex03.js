//aula02-ex03
const input = require('readline-sync')

const somar = (a, b) => a + b
const subtrair = (a, b) => a - b
const multiplicar = (a, b) => a * b
const dividir = (a, b) => b === 0 ? "Erro" : a / b

const num1 = parseFloat(input.question("Digite o 1° numero: "))
const num2 = parseFloat(input.question("Digite o 2° numero: "))

console.log(`Soma: ${somar(num1, num2)}`)
console.log(`Subtracao: ${subtrair(num1, num2)}`)
console.log(`Multiplicacao: ${multiplicar(num1, num2)}`)
console.log(`Divisao: ${dividir(num1, num2)}`)
