//Parte 3 – Funções
const readline = require('readline-sync')

const a = Number(readline.question("Digite o primeiro número: "))
const b = Number(readline.question("Digite o segundo numero: "))

function min(a, b) {
    if (a > b ){
        return b
    }
 return a
}

let resul = min(a, b)
console.log(`O menor número é o ${resul}`)
