//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.
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

let pesoTotale = 0;

for(let i=0; i < zucchine.length; i++){
    pesoTotale += zucchine[i].peso;
}

console.log('Il peso totale di tutte le zucchine è', pesoTotale, 'grammi.');
