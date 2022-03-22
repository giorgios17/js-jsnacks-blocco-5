//Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro, es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const lettere = ['a','b','c','d','e','f','g','h','i',];
const numeri = [1,2,3,4,5,6,7,8,9];

function fusionArray(array1, array2){
    const arrayTotale = [];
    for(let i=0; i < array1.length; i++){
        arrayTotale.push(array1[i], array2[i]);
    }
    return arrayTotale;
}

console.log(fusionArray(lettere,numeri));