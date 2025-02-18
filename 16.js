function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

let email = "correo@gmail.com";
let nombre = "nombre";


if (validarEmail(email)) {
    console.log("El email es válido.");
} else {
    console.log("El email no es válido.");
}
