// Crea un arreglo vacío llamado 'tareas' para almacenar las tareas
let tareas = [];

// Crea una función para agregar una tarea al arreglo tareas
function agregar(id, descripcion, completado) {
    // Crea un objeto tarea con los parámetros proporcionados
    let tarea = {id, descripcion, completado};
    // Añade el objeto tarea al arreglo tareas
    tareas.push(tarea);
}

// Crea una función para eliminar una tarea del arreglo tareas basado en su id
function eliminar(id){
    // Busca el índice de la tarea con el id proporcionado
    let indice = tareas.findIndex(tarea => tarea.id === id);
    // Si la tarea se encuentra en el arreglo, la elimina y la devuelve
    if (indice !== -1) {
        return tareas.splice(indice, 1)[0];
    }
    // Si la tarea no se encuentra, devuelve null
    return null;
} 

// Crea una función para completar una tarea del arreglo tareas basado en su id
function completar(id){
    // Busca el índice de la tarea con el id proporcionado
    let indice = tareas.findIndex(tarea => tarea.id === id);
    // Si la tarea se encuentra, marca su propiedad completado como true
    if (indice !== -1) {
        return tareas[indice].completado = true;
    }
    // Si la tarea no se encuentra, devuelve null
    return null;
} 

// Agrega dos tareas con diferentes valores
agregar(1, "tarea1", true);
agregar(2, "tarea2", false);

// Imprime en consola el arreglo de tareas inicialmente con dos tareas
console.log(tareas);

// Elimina la tarea con id 1 y la imprime
eliminar(1);
console.log(tareas);

// Completa la tarea con id 2 y la imprime
completar(2);
console.log(tareas);



