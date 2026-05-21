function validarSenha(senha) {
    return senha.length >= 8;
}
const senhaUsuario = prompt("Digite a sua senha:");
if (validarSenha(senhaUsuario)) {
    console.log("Senha valida");
} else {
    console.log("Senha fraca - minimo 8 caracteres");
}