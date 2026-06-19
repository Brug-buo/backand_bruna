const readline = require('readline-sync')

const inicio = Number(readline.question("digite um numero (inicio): ")) 
const fim = Number(readline.question("digite outro numero (final): "))

function ranger(inicio, fim) {
    let numrs = []

    for (let i = inicio; i <= fim; i++) {
        numrs.push(i)
    }
    return numrs
}
console.log(ranger(inicio, fim))
function soma(todos) {
    let total= 0
    for (let i=0; i<todos.length; i++){
        total += todos[i]
    }
    return total
    }

console.log(soma(ranger(inicio, fim)))


