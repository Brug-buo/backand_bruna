const readline = require('readline-sync')


const a = Number(readline.question("Informe um número: "))
const b = Number(readline.question("Informe segundo número: "))
const operacao = readline.question("Informe o tipo de operação: (soma, subtrair, multiplicar):")
let tipo = ""


function calcular (a, b, operacao) {
if ( operacao === "soma"){
tipo = "soma"
return a + b
}
else if ( operacao === "subtrair"){
tipo = "subitração"
return a - b


}
else if ( operacao === "multiplicar"){
tipo = "multiplicação"
return a * b
}
}
const result = calcular(a, b, operacao)
console.log(`Na sua escolha (${tipo}), teve o resultado de: ${result}`)
