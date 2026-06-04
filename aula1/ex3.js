//aula01-ex03
let some = 0

for (let i = 1; i <= 5; i++){
    let nota = Number(prompt(`Digite a nota ${i}:`))
    some += nota
}

let media = some / 5
console.log(`Média final: ${media.toFixed(1)}`)

if (media >= 7) {
    console.log("Aprovado")
} else if (media >= 5) {
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}