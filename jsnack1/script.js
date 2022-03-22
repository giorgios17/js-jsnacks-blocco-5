//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.
const zucchine = [
    {
    tipo: 'Zucchina nera',
    peso: 60,
    lunghezza: 50
    },
    {
    tipo: 'Zucchino romanesco',
    peso: 30,
    lunghezza: 25
    },
    {
    tipo: 'Zucchino fiorentino',
    peso: 75,
    lunghezza: 32
    },
    {
    tipo: 'Zucchina napoletana',
    peso: 65,
    lunghezza: 34
    },
    {
    tipo: 'Zucchine tonde',
    peso: 82,
    lunghezza: 46
    },
    {
    tipo: 'Zucchine trombetta',
    peso: 61,
    lunghezza: 38
    },
    {
    tipo: 'Zucchino giallo',
    peso: 64,
    lunghezza: 34
    },
    {
    tipo: 'Zucchino rugoso friulano',
    peso: 42,
    lunghezza: 36
    },
    {
    tipo: 'Zucchina Crookneck',
    peso: 47,
    lunghezza: 29
    },
    {
    tipo: 'Zucchina pâtisson',
    peso: 38,
    lunghezza: 25
    }
];

let pesoTotale = 0;

for(let i=0; i < zucchine.length; i++){
    pesoTotale += zucchine[i].peso;
}

console.log('Il peso totale di tutte le zucchine è', pesoTotale, 'grammi.');
