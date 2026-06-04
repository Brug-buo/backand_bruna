//aula02-ex01
const input = require('readline-sync')

function somar(a, b) {
    return a + b
}
function subtrair(a, b) {
    return a - b
}
function multiplicar(a, b) {
    return a * b
}
function dividir(a, b) {
    if (b === 0) {
        return "Erro"
    }
    return a / b;
}
const num1 = parseFloat(input.question("Digite o 1° numero: "))
const num2 = parseFloat(input.question("Digite o 2° numero: "))

console.log(`Soma: ${somar(num1, num2)}`)
console.log(`Subtração: ${subtrair(num1, num2)}`)
console.log(`Multiplicação: ${multiplicar(num1, num2)}`)
console.log(`Divisão: ${dividir(num1, num2)}`)
