//aula01-ex04
const input = require('readline-sync');
const numero = Number(input.question("Tabuada de qual numero? "));

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
