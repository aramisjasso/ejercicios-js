// Crea un arreglo de números
let numeros = [1, 2, 3, 4, 5];

// Crea un nuevo arreglo con los resultados que retorna la función
let cuadrados = numeros.map(function (x) {
    // Retorna el cuadrado de los elementos del arreglo original
    return x*x;
});

// Imprime el arreglo de cuadrados en consola
console.log(cuadrados);