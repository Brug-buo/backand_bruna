//aula01-ex02
const input = require('readline-sync')
const num1 = Number(prompt("Digite o 1° número:"))
const num2 = Number(prompt("Digite o 2° número:"))

const soma = num1 + num2
const subtracao = num1 - num2
const multiplicacao = num1 * num2

console.log(`Soma: ${soma}`)
console.log(`Subtração: ${subtracao}`)
console.log(`Multiplicação: ${multiplicacao}`)

if (num2 === 0) {
    console.log("Erro")
} else {
    const divisao = num1 / num2;
    console.log(`Divisão: ${divisao}`)
}