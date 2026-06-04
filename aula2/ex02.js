//aula02-ex02
const input = require('readline-sync');

function validarSenha(senha) {
    return senha.length >= 8;
}

const senhaUsuario = input.question("Digite a sua senha:");
if (validarSenha(senhaUsuario)) {
    console.log("Senha valida");
} else {
    console.log("Senha fraca - minimo 8 caracteres");
}
