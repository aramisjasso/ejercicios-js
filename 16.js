// Función para validar un email mediante una expresión regular
function validarEmail(email) {
    // Expresión regular para validar un email con el formato de correo electrónico
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    // Devuelve true si el email coincide con la expresión regular, de lo contrario, false
    return regex.test(email);
}

// Asigna un correo valido de ejemplo a la varible email
let email = "correo@gmail.com";
// Asigna una cadena no valida de ejemplo a la variable nombre
let nombre = "nombre";

// Verifica si el email es válido utilizando la función validarEmail
if (validarEmail(email)) {
    // Si el email es válido, imprime un mensaje de confirmación
    console.log("El email es válido.");
} else {
    // Si el email no es válido, imprime un mensaje de error
    console.log("El email no es válido.");
}
