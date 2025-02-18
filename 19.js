// Realiza una solicitud GET HTTP a la URL
fetch('https://jsonplaceholder.typicode.com/todos/1') 
        // Convierte la promesa respuesta en un objeto JSON
        .then(resp => resp.json())
        // Imprime los datos obtenidos en consola
        .then( data => console.log(data)
 );