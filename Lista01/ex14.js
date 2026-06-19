const readline = require('readline-sync')
const num = readline.question("digite um palavra: ")

function reverter(num){
let novo=[]
for(let i= num.length-1; i>=0; i--){
novo.push(num[i])
}
return novo
}

console.log(reverter(num))
