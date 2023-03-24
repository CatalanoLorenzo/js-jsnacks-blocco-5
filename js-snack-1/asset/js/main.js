/* Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine. */
//array di 10 oggetti
const zucchine = [
    {
        varieta:'BlackBeauty',
        peso:100,
        lunfhezza:10
    },
    {
        varieta:'CostataRomanesca',
        peso:150,
        lunfhezza:15
    },
    {
        varieta:'TrombettaAlbenga',
        peso:200,
        lunfhezza:20,
    },
    {
        varieta:'BiancaTrieste',
        peso:250,
        lunfhezza:25,
    },
    {
        varieta:'TondaNizza',
        peso:150,
        lunfhezza:12
    },
    {
        varieta:'LungaFiorentina',
        peso:300,
        lunfhezza:30
    },
    {
        varieta:'StriataItalia',
        peso:200,
        lunfhezza:18
    },
    {
        varieta:'PatissonBianco',
        peso:150,
        lunfhezza:14
    },
    {
        varieta:'YellowCrookneck',
        peso:250,
        lunfhezza:22
    },
    {
        varieta:'Cocozelle',
        peso:251,
        lunfhezza:22
    },
]
let somma = 0
console.log(somma);
zucchine.forEach((thy)=>{
    const {peso} = thy
    console.log(peso);
    somma += peso
})
console.log(somma + 'kg');