let tareas = [];

function agregar(id, descripcion, completado) {
    tarea = {id, descripcion, completado};
    tareas.push(tarea);
}

function eliminar(id){
    let indice = tareas.findIndex(tarea => tarea.id === id);
    if (indice !== -1) {
        return tareas.splice(indice, 1)[0];
    }
    return null;
} 

function completar(id){
    let indice = tareas.findIndex(tarea => tarea.id === id);
    if (indice !== -1) {
        return tareas[indice].completado = true;
    }
    return null;
} 

agregar(1, "tarea1", true);
agregar(2, "tarea2", false);
console.log(tareas);
eliminar(1);
console.log(tareas);
completar(2);
console.log(tareas);



