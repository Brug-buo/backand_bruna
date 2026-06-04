//aula01-ex03
const input = require('readline-sync');

let nota = Number(input.question("Digite a nota: "));

if (nota >= 7) { 
    console.log("Aprovado");
} else if (nota >= 5) { 
    console.log("Recuperacao");
} else { 
    console.log("Reprovado");
}

