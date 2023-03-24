/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri ("a" più piccolo di "b" e "b" grande al massimo quanto il numero di elementi dell'array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra "a" e "b" */
const array = ['a', 'b', 'c', 'd', 'e']

let a = 2
let b = 5

const new_array = newArray_whit_elementpositio_a_and_b(array, a, b)


console.log(new_array);

/**
 * 
 * @param {Array} array 
 * @param {Number} a 
 * @param {Number} b 
 */
function newArray_whit_elementpositio_a_and_b(array, a, b) {
    // se verifica la consizione a piu piccolo di b e b piu piccolo della lunghezza dell'array
    
        
    let newArray = []
         array.filter((e,i) => {
            console.log(e);
            if (a <= i && i <= b) {
                console.log(e,i);
                newArray.push(e)
              }
        })
        return newArray
         
      
}