//Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

function reverseString(string){
    let parolaReverse= '';

    for(let i=string.length -1; i >= 0; i--){
        parolaReverse += string[i]
    }

   return parolaReverse;
}

console.log(reverseString('boolean'));