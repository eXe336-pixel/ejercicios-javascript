let numero = 22;

function propiedadesMatematicas(numero){
    let objeto = {
        cuadrado: Math.pow(numero, 2),
        raizCuadrada: Math.sqrt(numero),
        valorAbsoluto: Math.abs(numero)
    }
    return objeto;
}

console.log(propiedadesMatematicas(numero));