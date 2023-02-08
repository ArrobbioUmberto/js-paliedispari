console.log('ciao')

// Palidroma
// Chiedere all’utente di inserire una parola

// Creare una funzione per capire se la parola inserita è palindroma
// const string = prompt('Dimmi una parola e vediamo se è palindroma: ');
// const value = isPalindroma(string) 


// function isPalindroma(str) {   
//     const lunghezzaParola = str.length; 
//     console.log(string) 
//     // uso un loop per dividere le parole in due parti e poi le confronto 
//     for (let i = 0; i < lunghezzaParola / 2; i++) {  
//         // se la prima parte divisa è uguale alla seconda allora sono palindrome sennò non lo è 
//         if (str[i] !== str[lunghezzaParola - 1 - i]) {  
//           console.log('non è palindromo')
//           return;
//         }  
//     }  
//     console.log( 'è palindroma'); 
     
// } 



// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    const askParioDispari = prompt('Dimmi pari o dispari')
    const numberUser = parseInt(prompt('Dimmi anche un numero da 1 a 5'))
    console.log(askParioDispari)
    console.log('numero user', numberUser)
 // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    const numberPc = parseInt(Math.random() * 5 + 1 )
    console.log('numero pc', numberPc)
    const sommaNumeri = numberPc + numberUser
// Sommiamo i due numeri
    const resto = sommaNumeri % 2

if ((isEven(sommaNumeri)) && (askParioDispari === 'pari')) {
    document.getElementById('messaggio').innerHTML = 'la somma è pari ' + sommaNumeri + ' hai vinto'
	console.log('la somma è pari', sommaNumeri, ' hai vinto')
} else{
    document.getElementById('messaggio').innerHTML = 'Mi spiace hai perso. La somma è ' + sommaNumeri
    console.log('Mi spiace hai perso. La somma è ', sommaNumeri)
}

if ((isOdd(sommaNumeri)) && (askParioDispari === 'dispari')) {
    document.getElementById('messaggio').innerHTML = 'la somma è dispari ' + sommaNumeri + ' hai vinto'
	console.log('la somma è dispari', sommaNumeri)
} 



// isEven(numero) //true se numero è pari, false se il numero è dispari
// isOdd(numero) //true se il numero è dispari, false se il numero è pari

function isEven(num) {
	const resto = num % 2
	if (resto === 0) {
		return true
	} else {
		return false
	}
}

function isOdd(_num) {
	if(resto === 1) {
	  return true
	} else {
	  return false
	}
}