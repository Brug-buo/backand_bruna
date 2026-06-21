
const produtos = [
  { id: 1, nome: "Pijama", preco: 136.90 },
  { id: 2, nome: "conjunto meias", preco: 32.99 },
  { id: 3, nome: "Pantufas", preco: 88.09 },
  { id: 4, nome: "Jaqueta", preco: 165.20 },
  { id: 5, nome: "toca inverno", preco: 54.86 }
]

const produto3 = produtos.find(p => p.id === 3)
console.log("-Produto com id: 3-")
console.log(produto3)

console.log()

const produtos100 = produtos.filter(p => p.preco > 100)
console.log("-Preço acima de 100-")
console.log(produtos100)

console.log()

const nomesP = produtos.map(p => p.nome)
console.log("-Nomes dos produtos-")
console.log(nomesP)

console.log()

console.log("-Produtos formatados-")
produtos.forEach(p => {console.log(`Produto id${p.id}: ${p.nome} - R$ ${p.preco.toFixed(2)}`) } )
