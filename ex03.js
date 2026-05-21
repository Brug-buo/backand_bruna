
const somar = (a, b) => a + b
const subtrair = (a, b) => a - b
const multiplicar = (a, b) => a * b
const dividir = (a, b) => b === 0 ? "Erro" : a / b

const num1 = parseFloat(prompt("Digite o 1° número:"))
const num2 = parseFloat(prompt("Digite o 2° número:"))

console.log(`Soma: ${somar(num1, num2)}`)
console.log(`Subtração: ${subtrair(num1, num2)}`)
console.log(`Multiplicação: ${multiplicar(num1, num2)}`)
console.log(`Divisão: ${dividir(num1, num2)}`)