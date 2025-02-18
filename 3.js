// Solicita la edad al usuario
console.log("introduce tu edad: ");
// Crea un manejador para los procesos de entrada.
const stdin = process.openStdin();

// Detecta cuando el manejador recibe una entrada
stdin.addListener("data", (data) => {
    // Convierte la entrada a cadena, después a un valor entero, y este valor lo compara para ver si es mayor o igual a 18
    if (parseInt(data.toString(), 10) >= 18) {
        // Si es mayor a 18 imprime que es mayor de edad
        console.log("mayor de edad");
    }
    else {
        // Sino, imprime que el usuario es menor de edad
        console.log("menor de edad");
    }
    // Finaliza el proceso para realizarlo una única vez
    process.exit();
})
