console.log('ciao')

// Palidroma
// Chiedere all’utente di inserire una parola

// Creare una funzione per capire se la parola inserita è palindroma
const string = prompt('Dimmi una parola e vediamo se è palindroma: ');
const value = isPalindroma(string)  
function isPalindroma(str) {   
    const lunghezzaParola = str.length;  
  
    // uso un loop per dividere le parole in due parti  
    for (let i = 0; i < lunghezzaParola / 2; i++) {  
        // validate the first and last characters are the same  
        if (str[i] !== str[lunghezzaParola - 1 - i]) {  
          console.log('non è palindromo')
          return;
        }  
    }  
    console.log( 'è palindroma');  
}  
    


// Comunicare all’utente (decidete voi come) se la parola che ha inserito è palindroma oppure no


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Comunichiamo all’utente chi ha vinto. (decidete voi come)