// Crea una nueva promesa que se resuelve después de 2 segundos
const promesa = new Promise((resolve, reject) => {
    // Función que se ejecuta después de 2 segundos
    setTimeout(() => {
        // Resuelve la promesa con el mensaje "Promesa resuelta"
        resolve("Promesa resuelta");
    }, 2000);
});

// Cuando la promesa se resuelve, imprime el valor resuelto
promesa.then((val) => console.log(val));
