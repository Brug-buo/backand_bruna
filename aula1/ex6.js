//aula01-ex06
const input = require('readline-sync')
const secreto = 42
let tentativas = 0

while (true) {
    let palpite = Number(input.question("Qual o numero secreto? "))
    tentativas++

    if (palpite === secreto) {
        console.log(`Acertou em ${tentativas} tentativas!`)
        break
    } else if (palpite < secreto) {
        console.log("O numero secreto e maior.")
    } else {
        console.log("O numero secreto e menor.")
    }
}
