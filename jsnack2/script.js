//Crea 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. 
//Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchine = [
    {
    tipo: 'Zucchina nera',
    peso: 60,
    lunghezza: 12
    },
    {
    tipo: 'Zucchino romanesco',
    peso: 30,
    lunghezza: 5
    },
    {
    tipo: 'Zucchino fiorentino',
    peso: 75,
    lunghezza: 23
    },
    {
    tipo: 'Zucchina napoletana',
    peso: 65,
    lunghezza: 21
    },
    {
    tipo: 'Zucchine tonde',
    peso: 82,
    lunghezza: 30
    },
    {
    tipo: 'Zucchine trombetta',
    peso: 61,
    lunghezza: 22
    },
    {
    tipo: 'Zucchino giallo',
    peso: 64,
    lunghezza: 25
    },
    {
    tipo: 'Zucchino rugoso friulano',
    peso: 42,
    lunghezza: 10
    },
    {
    tipo: 'Zucchina Crookneck',
    peso: 47,
    lunghezza: 12
    },
    {
    tipo: 'Zucchina pâtisson',
    peso: 38,
    lunghezza: 14
    }
];

const zucchineLunghe = [];
const zucchineCorte = [];
let pesoTotaleZucchineLunghe = 0;
let pesoTotaleZucchineCorte = 0;

for(let i=0; i < zucchine.length; i++){
    if(zucchine[i].lunghezza >= 15){
        zucchineLunghe.push(zucchine[i].peso);
    }
    else{
        zucchineCorte.push(zucchine[i].peso);
    }
}

for(let i=0; i < zucchineLunghe.length; i++){
    pesoTotaleZucchineLunghe += zucchineLunghe[i].peso;
}
for(let i=0; i < zucchineCorte.length; i++){
    pesoTotaleZucchineCorte += zucchineCorte[i].peso;
}
console.log('array zucchine lunghe', zucchineLunghe);
console.log('array zucchine corte', zucchineCorte);
console.log('Il peso totale delle zucchine più lunghe di 15cm è', pesoTotaleZucchineLunghe);
console.log('Il peso totale delle zucchine meno lunghe di 15cm è', pesoTotaleZucchineCorte);








