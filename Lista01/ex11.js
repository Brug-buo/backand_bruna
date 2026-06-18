const readline = require('readline-sync')
const idade = Number(readline.question("Informe sua idade: "))


function podeVotar(idade) {
if ( idade < 16){
return false
} else {
  return true
}
   }

if(podeVotar(idade) === true){
    console.log("Pode votar")
}