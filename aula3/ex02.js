
const produtos = [
    { id: 1, nome: "Crocks", preco: 90.00 },
    { id: 2, nome: "Relogio", preco: 20.00 },
    { id: 3, nome: "pijama", preco: 50.00 },
    { id: 4, nome: "Fone JBL", preco: 200.00 },
    
]
console.log("Produtos")
for (let i = 0; i < produtos.length; i++) {
    console.log(`Id: ${produtos[i].id} - Produto: ${produtos[i].nome} - Preço: R$ ${produtos[i].preco.toFixed(2)}`)
}
const novoTamanho = produtos.push({ id: 5, nome: "pulseira", preco: 11.00 })

console.log("\nNovo produto")
console.log(`Novo tamanho do array: ${novoTamanho} itens.`)