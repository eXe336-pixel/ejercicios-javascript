let cadena = "Cadena de prueba";

function mayusculaVocal(cadena){
    let vocales = ["a", "e", "i", "o", "u"];
    let cadenaMayuscula = "";

    for (let letra of cadena) {
        if (vocales.includes(letra)) {
            letra = letra.toUpperCase();            
            cadenaMayuscula += letra;
        }
        else{
            cadenaMayuscula += letra;
        }       
    }
    return cadenaMayuscula;
}

console.log(mayusculaVocal(cadena));