/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri ("a" più piccolo di "b" e "b" grande al massimo quanto il numero di elementi dell'array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra "a" e "b" */




/**
 * 
 * @param {Array} array 
 * @param {Number} a 
 * @param {Number} b 
 */
function newArray_whit_elementpositio_a_and_b(array,a,b) {
    if (a<b && b<=array.length)
    {const valoreA = array[a]
    const valoreB = array[b]
    const newArray = [valoreA,valoreB]
    return newArray}
}