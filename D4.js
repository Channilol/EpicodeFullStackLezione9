/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/*
function area(l1, l2) {
    let areaRettangolo = l1 * l2;
    return areaRettangolo
}

const areaX = area(4,5)

console.log(areaX)
*/

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* function crazySum(p1,p2) {
    let somma
    if(p1 === p2) {
        somma = (p1 + p2) * 3
    }
    else {
        somma = p1 + p2
    }
    return somma
}

const provaParametri = crazySum(3,3)
console.log(provaParametri) */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* function crazyDiff(p1) {
    let somma
    let p2 = 19
    if(p1 > p2) {
        somma = (p1 - p2) * 3
    }
    else {
        somma = p1 - p2
    }
    return somma
}

const provaParametri = crazyDiff(10)
const provaParametri2 = crazyDiff(21)
console.log(provaParametri)
console.log(provaParametri2) */


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* function boundary(n) {
    let parametro
    if (n >= 20 && n <= 100 || n === 400) {
        parametro = true
    } else {
        parametro = false
    }
    return parametro
}

const provaParametri = boundary(19)
console.log(provaParametri)
const provaParametri2 = boundary(59)
console.log(provaParametri2)
const provaParametri3 = boundary(400)
console.log(provaParametri3) */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* function epify(stringa) {
    if (typeof inputString !=== "string") {
        return "Il contenuto non è una stringa"
    }

    if(stringa.startsWith("EPICODE")) {
        return stringa
    } else {
        return "EPICODE" + stringa
    }
}

const provaStringa = "EPICODaaab"
const risultatoStringa = epify(provaStringa)
console.log(risultatoStringa) */


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* function check3and7 (p1) {
    let risultato
    if(p1 <= 0) {
        risultato = "Il numero non è positivo"
        return risultato
    }
    if(p1 % 3 === 0) {
        risultato = "Il tuo numero è divisibile per 3"
        return risultato
    } 
    else if (p1 % 7 === 0) {
        risultato = "Il tuo numero è divisibile per 7"
        return risultato
    } else {
        risultato = "Il numero non è divisibile per 3 o 7"
        return risultato
    }
}

const provaParametri = parseInt(prompt("Numero"))
const risultatoParametro = check3and7(provaParametri)
console.log(risultatoParametro) */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* function reverseString(stringa) {
    return stringa.split('').reverse().join('')
}

const provaStringa = prompt("Stringa")
const risultatoStringa = reverseString(provaStringa)
console.log(risultatoStringa) */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* function upperFirst(stringa) {
    let parole = stringa.split(' ');
    for (let i = 0; i < parole.length; i++) {
        parole[i] = parole[i].charAt(0).toUpperCase() + parole[i].slice(1)
    }
    return parole.join(' ');
}

const paroleProva = prompt("Frase")
const risultatoProva = upperFirst(paroleProva)
console.log(risultatoProva) */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* function cutString(stringa) {
    let parole = stringa.slice(1, stringa.length - 1)
    return parole
    }

const paroleProva = prompt("Parole")
const risultatoProva = cutString(paroleProva)
console.log(risultatoProva)  */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom (n) {
    let array = []
    for (let i = 0; i < n; i++) {
        let random = Math.floor(Math.random() * 11);
        array.push(random);
    }
    return array
}

const numeriRandom = parseInt(prompt("Numeri"))
console.log(giveMeRandom(numeriRandom))