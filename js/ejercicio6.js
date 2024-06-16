let cadena2 = "Cadena de prueba 2";

function invertirCadena(cadena){
    let cadenaInvertida = "";
    for (let letra of cadena) {
        cadenaInvertida = letra + cadenaInvertida;
    }
    return cadenaInvertida;
}   

console.log(invertirCadena(cadena2));