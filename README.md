# ejercicios-js
Este repositorio contiene una serie de ejercicios básicos de JavaScript para practicar conceptos fundamentales. 

## Ejercicios
### Ejercicio 1
**Descripción**
Crea una variable llamada nombre y asígnale tu nombre. Luego, imprime el valor en la consola.

**Solución**
Creamos una variable llamada nombre con let, le asignamos un valor y la imprimimos con console.log(). 


### Ejercicio 3
**Descripción**
Escribe un programa que pregunte al usuario su edad y le diga si es mayor de edad (18 años o más) o no.

**Solución**
Solicitamos el dato, lo leímos con process.openStdin(). El dato ingresado lo convertimos a entero, lo comparamos, mostramos el mensaje y finalizamos el proceso. 


### Ejercicio 5
**Descripción**
Escribe una función llamada saludar(nombre) que reciba un nombre y devuelva un mensaje de saludo. 

**Solución**
Creamos una función que recibe el nombre cómo parametro y lo imprime en consola después de un mensaje de saludo. Después llamamos la función. 


### Ejercicio 7
**Descripción**
Dado un arreglo let numeros = [2, 4, 6, 8, 10], usa forEach para imprimir cada número en la consola.

**Solución**
Creamos el arreglo, usamos la función para arreglos forEach e imprimimos cada elemento en consola dentro de este ciclo. 


### Ejercicio 9
**Descripción**
Agrega una nueva propiedad nacionalidad al objeto persona del ejercicio anterior y muéstrala en consola.

**Solución**
Agregamos la nueva propiedad con nombreObjeto.propiedad y le asignamos un valor. Después la imprimimos en consola con la misma sintaxis. 


### Ejercicio 11
**Descripción**
Dado let numeros = [1, 2, 3, 4, 5], usa .map() para obtener un nuevo array donde cada número esté elevado al cuadrado.

**Solución**
Declaramos el arreglo, asignamos este mismo arreglo a una nueva variable, llamando a la función map() y dentro creamos una función para retornar el cuadrado de cada número. Al final imprimimos el nuevo arreglo en consola. 


### Ejercicio 13
**Descripción**
Escribe una función que imprima "Hola después de 3 segundos" utilizando setTimeout().

**Solución**
Llamamos la función setTimeout(). Como primer parámetro creamos una función arrow para imprimir el mensaje en consola, y el segundo fue el total de milisegundos equivalente a 3 segundos entre comillas dobles. 


### Ejercicio 15
**Descripción**
Modifica la función del ejercicio anterior para que use async y await.

**Solución**
Copiamos la promesa del ejercicio anterior, la colocamos dentro de una función asíncrona, y después de la promesa imprimimos el valor de retorno de la promesa llamada con un await. 


### Ejercicio 17
**Descripción**
Dado un string "Hola, cómo estás?", conviértelo a mayúsculas y elimina las comas.

**Solución**
Declaramos una variable con el mensaje. Primero usamos la función toUpperCase() para convertir la cadena a mayúsculas y después eliminamos las comas con la función replace(), pasando como primer parámetro la coma, y como segundo una cadena vacía. Después imprimimos la cadena en consola. 


### Ejercicio 19
**Descripción**
Usa fetch() para obtener información de https://jsonplaceholder.typicode.com/todos/1 y muestra el resultado en consola.

**Solución**
Usamos el método de JS fetch() para hacer la petición HTTP al enlace proporcionado. Después con un .then() convertimos la respuesta a JSON, y el resultado de esto, en data lo imprimimos en consola.  


