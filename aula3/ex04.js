//aula03-ex04
const input = require('readline-sync')
const alunos = [
    { id: 1, nome: "Amanda", nota: 10.0 },
    { id: 2, nome: "Briana", nota: 9.5 },
    { id: 3, nome: "Calebe", nota: 7.0 },
    { id: 4, nome: "Diogo", nota: 5.5 },
    { id: 5, nome: "Emanuel", nota: 3.0 }
]

const alunosEmSituacao = alunos.map(aluno => {
    return {
        nome: aluno.nome,
        nota: aluno.nota,
        situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
    }
})
console.log("Resultados")
console.log(alunosEmSituacao)