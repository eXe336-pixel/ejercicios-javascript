let numeros = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

function cuadrado (array){
    let cuadrados = [];
    for (let numero of array) {
        numero = numero * numero;
        cuadrados.push(numero);
    }
    return cuadrados;
}

console.log(cuadrado(numeros));