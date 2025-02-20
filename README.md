# ejercicios-js
Este repositorio contiene una serie de ejercicios básicos de JavaScript para practicar conceptos fundamentales. 

## Ejercicios
### Ejercicio 1
**Descripción**

Crea una variable llamada nombre y asígnale tu nombre. Luego, imprime el valor en la consola.

**Solución**

Creamos una variable llamada nombre con let, le asignamos un valor y la imprimimos con console.log(). 

### Ejercicio 2
**Descripción**

Declara dos variables con números y realiza las operaciones básicas: suma, resta, multiplicación y división. Imprime los resultados.

**Solución**

Creamos dos variables, n1 y n2, les asignamos valores numericos e imprimimos el resultado de cada operación aritmética con console.log().

### Ejercicio 3
**Descripción**

Escribe un programa que pregunte al usuario su edad y le diga si es mayor de edad (18 años o más) o no.

**Solución**

Solicitamos el dato, lo leímos con process.openStdin(). El dato ingresado lo convertimos a entero, lo comparamos, mostramos el mensaje y finalizamos el proceso. 

### Ejercicio 4
**Descripción**

Escribe un programa que imprima los números del 1 al 10 en la consola.

**Solución**

Creamos un ciclo for con el valor incial de i igual a 1, con incremento en 1 hasta que el valor de i sea igual o menor a 10 para obtener 10 iteraciones. En cada iteración imprimimos el valor de i con console.log().

### Ejercicio 5
**Descripción**

Escribe una función llamada saludar(nombre) que reciba un nombre y devuelva un mensaje de saludo. 

**Solución**

Creamos una función que recibe el nombre cómo parametro y lo imprime en consola después de un mensaje de saludo. Después llamamos la función. 

### Ejercicio 6
**Descripción**

Crea un array con los nombres de 5 ciudades y muestra la segunda ciudad en la consola.

**Solución**

Creamos el arreglo e imprimimos con console.log() el arreglo indicando la segunda posición (índice 1).


### Ejercicio 7
**Descripción**

Dado un arreglo let numeros = [2, 4, 6, 8, 10], usa forEach para imprimir cada número en la consola.


**Solución**

Creamos el arreglo, usamos la función para arreglos forEach e imprimimos cada elemento en consola dentro de este ciclo. 

### Ejercicio 8
**Descripción**

Crea un objeto persona con propiedades nombre, edad y profesión. Imprime su nombre.

**Solución**

Creamos el objeto persona y le asignamos valores a sus propiedades (nombre, edad y profesión). Imprimimos el nombre de la persona con console.log() indicando la propiedad del objeto(objeto.nombre).

### Ejercicio 9
**Descripción**

Agrega una nueva propiedad nacionalidad al objeto persona del ejercicio anterior y muéstrala en consola.

**Solución**

Agregamos la nueva propiedad con nombreObjeto.propiedad y le asignamos un valor. Después la imprimimos en consola con la misma sintaxis. 

### Ejercicio 10
**Descripción**

Dado el arreglo let edades = [12, 18, 25, 10, 30, 16], usa filter() para crear un nuevo arreglo solo con los mayores de edad.

**Solución**

Creamos el arreglo, utilizando filter() obtenemos los elementos del arreglo que sean mayores o iguales a 18 y guradamos los valores en un nuevo arreglo llamado mayores. Finalmente, imprimimos el arreglo mayores en consola.

### Ejercicio 11
**Descripción**

Dado let numeros = [1, 2, 3, 4, 5], usa .map() para obtener un nuevo array donde cada número esté elevado al cuadrado.

**Solución**

Declaramos el arreglo, asignamos este mismo arreglo a una nueva variable, llamando a la función map() y dentro creamos una función para retornar el cuadrado de cada número. Al final imprimimos el nuevo arreglo en consola. 

### Ejercicio 12
**Descripción**

Dado let precios = [10, 20, 30, 40], usa .reduce() para obtener el total de la suma de los precios.

**Solución**

Creamos el arreglo, inicializamos una varable llamada suma a 0 para acumular la suma de los precios, utilizamos reduce() para iterar sobre cada elemento del arreglo, sumándolos al acumulador y obtenemos el total de la suma. Finalmente, mostramos el resultado con console.log().

### Ejercicio 13
**Descripción**

Escribe una función que imprima "Hola después de 3 segundos" utilizando setTimeout().

**Solución**

Llamamos la función setTimeout(). Como primer parámetro creamos una función arrow para imprimir el mensaje en consola, y el segundo fue el total de milisegundos equivalente a 3 segundos entre comillas dobles. 

### Ejercicio 14
**Descripción**

Crea una función que devuelva una promesa que se resuelva después de 2 segundos con el mensaje "Promesa resuelta".

**Solución**

Creamos una promesa, dentro usamos setTimeout() para ejecutar una función que resuelve la promesa con el mensaje "Promesa resuelta" después de 2 segundos. Luego, utilizamos .then() para manejar la resolución de la promesa e imprimir el mensaje en la consola.

### Ejercicio 15
**Descripción**

Modifica la función del ejercicio anterior para que use async y await.

**Solución**

Copiamos la promesa del ejercicio anterior, la colocamos dentro de una función asíncrona, y después de la promesa imprimimos el valor de retorno de la promesa llamada con un await. 

### Ejercicio 16
**Descripción**

Crea una función que valide si una cadena de texto es un correo electrónico válido.

**Solución**

Creamos una función validarEmail(), se crea una variable a la cual se le asigna una expresión regular que valida los caracteres antes y después del "@" y asegura que haya un dominio con al menos dos caracteres después del punto. Para hacer la validación, usamos el método test() que devuelve true si la cadena coincide con el patrón de la expresión regular, o false si no es válida. Luego, llamamos a la función validarEmail() y le pasamos como parámetro una variable con la cadena a validar, si el correo proporcionado es válido mostramos un mensaje de confirmación y en caso contrario un mensaje de error.

### Ejercicio 17
**Descripción**

Dado un string "Hola, cómo estás?", conviértelo a mayúsculas y elimina las comas.


**Solución**

Declaramos una variable con el mensaje. Primero usamos la función toUpperCase() para convertir la cadena a mayúsculas y después eliminamos las comas con la función replace(), pasando como primer parámetro la coma, y como segundo una cadena vacía. Después imprimimos la cadena en consola. 

### Ejercicio 18
**Descripción**

Dado let palabras = ["banana", "manzana", "pera", "uva"], usa .sort() para ordenarlas alfabéticamente.

**Solución**

Creamos el arreglo, con el método sort() ordenamos el arreglo alfabéticamente y guardamos el resultado en un nuevo arreglo llamado ordenadas. Por último, imprimimos el arreglo en consola.

### Ejercicio 19
**Descripción**

Usa fetch() para obtener información de https://jsonplaceholder.typicode.com/todos/1 y muestra el resultado en consola.


**Solución**

Usamos el método de JS fetch() para hacer la petición HTTP al enlace proporcionado. Después con un .then() convertimos la respuesta a JSON, y el resultado de esto, en data lo imprimimos en consola.  

### Ejercicio 20
**Descripción**

Crea un array llamado tareas que almacene objetos { id, descripcion, completado }. Agrega funciones para:
- Agregar una tarea.
- Eliminar una tarea por id.
- Marcar una tarea como completada.

**Solución**

Creamos un arreglo vacio llamado tareas para almacenar los objetos que representan tareas. Cada tarea tiene un id, descripcion y completado. Después, definimos tres funciones:

- *Agregar una tarea:* Recibe un id, una descripcion y un valor de completado, crea un objeto con esos valores y lo agrega al arreglo tareas con push().
- *Eliminar una tarea por id:* Recibe un id, busca el índice de la tarea con el id proporcionado usando findIndex(). Si la tarea existe, se elimina con splice() y se devuelve. Si no se encuentra, se devuelve null.
- *Marcar una tarea como completada:* Recibe un id, busca el índice de la tarea con el id proporcionado. Si la tarea existe, se cambia el valor de la propiedad completado a true. Si no se encuentra, se devuelve null.

Finalmente, llamamos a las funciones creadas para agregar dos tareas al arreglo, eliminar una tarea por su id y completar otra tarea también por su id. Imprimimos el arreglo después de cada operación con console.log() para verificar el funcionamiento.