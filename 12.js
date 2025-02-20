// Crea el arreglo precios con varios valores numéricos
let precios = [10, 20, 30, 40];

// Inicializa la variable suma a 0 para almacenar la suma de los elementos del arreglo
const suma = 0;
// Utiliza la función reduce() para calcular la suma de todos los elementos del arreglo
const s = precios.reduce(
    (a,c) => a+c, suma
);

// Muestra el resultado en la consola
console.log(s);