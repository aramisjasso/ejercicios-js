const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa resuelta");
    }, 2000);
});

promesa.then((val) => console.log(val));
