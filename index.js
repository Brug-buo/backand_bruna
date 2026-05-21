
function somar(a, b) {
    return a + b;
}
function subtrair(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b === 0) {
        return "Erro: divisao por zero";
    }
    return a / b;
}
const num1 = parseFloat(prompt("Digite o 1° número:"));
const num2 = parseFloat(prompt("Digite o 2° número:"));
console.log(`Soma: ${somar(num1, num2)}`);
console.log(`Subtração: ${subtrair(num1, num2)}`);
console.log(`Multiplicação: ${multiplicar(num1, num2)}`);
console.log(`Divisão: ${dividir(num1, num2)}`);