//Scrivi una funzione che accetti tre argomenti: un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array). 
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”

const students = ['Giorgio', 'Giuseppe', 'Eleonora', 'Gianfilomenopoldo', 'Pancrazio', 'Letterio', 'Giuanni', 'Teodorico', 'Batman'];

function myFunction(array, num1, num2){
    const newArray = [];
    if(num1 < num2 && num2 <= array.length){
        for(let i=num1; i <= num2; i++){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(myFunction(students, 2, 5))