// Crea una función asíncrona con el nombre asincrono
async function asincrono() {
    // Crea una promesa
    const promesa = new Promise((resolve, reject) => {
        // Llama la función setTimeout y como primer parámetro una función arrow
        setTimeout(() => {
            // Resuelve la promesa retornando el valor de "Promesa resuelta"
            resolve("Promesa resuelta");
        // Indica el segundo parámetro de setTimeout, la cantidad de milisegundos de espera al llamar la función
        }, 2000);
    });
    // Imprime en consola el valor retornado por la promesa
    console.log(await promesa);
}

// Llama la función asincrono
asincrono();
