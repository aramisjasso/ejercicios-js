async function asincrono() {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promesa resuelta");
        }, 2000);
    });
    console.log(await promesa);
}

asincrono();

// promesa.then((val) => console.log(val));