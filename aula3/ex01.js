//aula03-ex01
const input = require('readline-sync')
const aluno = {
    nome: "Bruna",
    idade: 15,
    cidade: "Cascavel",
    curso: "Desenvolvimento de Sistemas"
}
console.log(`Nome: ${aluno.nome}`)
console.log(`Idade: ${aluno.idade} anos`)
console.log(`Cidade: ${aluno.cidade}`)
console.log(`Curso: ${aluno.curso}`)

aluno.cidade = "Ribeirão Preto";
console.log(`Nova Cidade: ${aluno.cidade}`)