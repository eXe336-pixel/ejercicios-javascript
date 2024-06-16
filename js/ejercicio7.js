let array1 = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let array2 = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

function sumaArrays(array1, array2){
    if (array1.length !== array2.length) {
        return "Los arrays no tienen la misma longitud";
    }
    let suma = [];
    let cantidad = array1.length;
    for (let i = 0; i < cantidad; i++) {
        suma.push(array1[i] + array2[i]);
    }
    return suma;
}

console.log(sumaArrays(array1, array2));