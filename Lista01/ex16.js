//Exerccio opicional - Boletim da turma (Desafio).
const alunos = [
  { nome: "Nicolas", nota: 5.1 },
  { nome: "Luis",    nota: 9.9 },
  { nome: "Cecilia", nota: 7.2 },
  { nome: "Marcio",  nota: 8.4 },
  { nome: "Maria",   nota: 3.9 }
]

const alunosComSituacao = alunos.map(aluno => ({
  ...aluno,
  situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
}))

console.log("Alunos com situação:")
console.log(alunosComSituacao)
console.log()

const aprovados = alunosComSituacao.filter(aluno => aluno.situacao === "Aprovado")
console.log(`Alunos aprovados: ${aprovados.length}`)
console.log()

const soma = alunos.reduce((total, aluno) => total + aluno.nota, 0)
const media = soma / alunos.length

console.log(`Média geral da turma: ${media.toFixed(2)}`)