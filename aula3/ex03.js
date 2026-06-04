const produtos = [
    { id: 1, nome: "Crocks", preco: 90.00 },
    { id: 2, nome: "Relogio", preco: 20.00 },
    { id: 3, nome: "pijama", preco: 50.00 },
    { id: 4, nome: "Fone JBL", preco: 200.00 },
    { id: 5, nome: "pulseira", preco: 11.00 }
]
const prodEncontra = produtos.find(produto => produto.id === 3)
console.log("Buscando pelo id")
if (prodEncontra) {
    console.log(`Produto com ID 3: ${prodEncontra.nome}`)
} else {
    console.log("Produto não encontrado.")
}

const prodCaros = produtos.filter(produto => produto.preco > 50.00)

console.log("\nProdutos acima de R$ 50,00")
console.log(prodCaros)