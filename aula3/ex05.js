
const readline = require('readline-sync')
const produtos = []

console.log("Area de cadastro")
for (let i = 1; i <= 3; i++) {
    console.log(`\nProduto ${i}:`)
    const nome = readline.question("Adicione o nome do produto")
    const preco = parseFloat(readline.question("Adicione o preço:"))
    produtos.push({ nome: nome, preco: preco })
}
const prodAcima = produtos.filter(produto => produto.preco > 20.00)

console.log("\n Produtos acima de R$ 20,00")
if (prodAcima.length > 0) {
    console.log(prodAcima)
}