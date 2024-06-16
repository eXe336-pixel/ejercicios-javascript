let alumnos = {
    Juan: 8,
    Maria: 9,
    Pedro: 7,
    Ana: 8,
    Luis: 5,
    Laura: 6,
    Carlos: 9,
}

function promedioNotas(objeto){
    let suma = 0;
    let cantidad = Object.keys(objeto).length;    
    for (let nota of Object.values(objeto)) {
        suma += nota;        
    }
    return suma/cantidad;
}

console.log(promedioNotas(alumnos));