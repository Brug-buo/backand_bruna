const readline = require('readline-sync')

const texto = readline.question("Digite um texto: ")
const letra = readline.question("Digite uma letra  ")
let cont = 0 

function contarLetra(texto, letra) {
    for(let i = 0; i < texto.length; i++){
     if(texto[i] === letra){
        cont++
     }
    }
     return cont
}
    console.log(contarLetra(texto, letra))