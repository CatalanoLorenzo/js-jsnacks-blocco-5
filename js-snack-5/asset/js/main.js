/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri ("a" più piccolo di "b" e "b" grande al massimo quanto il numero di elementi dell'array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra "a" e "b" */
const array = ['a', 'b', 'c', 'd', 'e']

let a = 2
let b = 4

const new_array = newArray_whit_elementpositio_a_and_b(array, a, b)

/**
 * 
 * @param {Array} array 
 * @param {Number} a 
 * @param {Number} b 
 */
function newArray_whit_elementpositio_a_and_b(array, a, b) {
    // se verifica la consizione a piu piccolo di b e b piu piccolo della lunghezza dell'array
    if (a < b && b <= array.length) {
        //associa ad una variabile il valore dell'array con index a
        const valoreA = array[a]
        //associa ad una variabile il valore dell'array con index b
        const valoreB = array[b]
        //crea un nuovo array con i valori A & B
        const newArray = [valoreA, valoreB]
        console.log(newArray);
        //ritorna l'array
        return newArray
    }
    else {
        //se verifica la consizione a piu piccolo di b e b piu piccolo della lunghezza dell'array se è negativa
        return console.log('error !a<b && b<=array.length');
    }
}