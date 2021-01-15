// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

// FUNZIONI
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

// function chiediNumero() {
//   for (x = 0; x < 5; x++) {
//     numeroScelto = parseInt(prompt('Inserisci i numeri che hai visto, uno alla volta'));
//     if (isNaN(numeroScelto)) {
//       alert('Inserisci un valore corretto');
//     } else {
//     numeriUtente.push(numeroScelto);
//     console.log(numeroScelto);
//     }
//   }
// }
//
// function risultato() {
//   for (var x = 0; x < numeriComputer.length; x++) {
//     if (numeriComputer[x] === numeriUtente[x]) {
//       contatoreRisultato += 1;
//     }
//   }
//   console.log('Il risultato è ' + contatoreRisultato);
//   alert('Hai indovinato ' + contatoreRisultato + ' numeri su 5\n' + 'I numeri che hai scritto sono ' + numeriUtente + '\nI numeri del computer sono ' + numeriComputer);
// }

// VARIABILI
var numeroRandom;
var arrayRandom = [];
var numeriComputer = [];
var numeroScelto;
var numeriUtente = [];
var contatoreRisultato = 0;

// ***************************************
// ciclo per generare 5 numeri casuali (evitando doppioni)
while (arrayRandom.length < 5) {
  numeroRandom = randomNumber(1,50);
  if (arrayRandom.indexOf(numeroRandom) === -1) {
    arrayRandom.push(numeroRandom);
    numeriComputer = arrayRandom.join(', ');
  }
}
console.log(numeriComputer);
$('.random-numbers').text(numeriComputer);

// dopo 30 secondi chiedo all'utente di riscrivere i numeri
setTimeout(chiediNumero, 30000);

// confronto numeriComputer e numeriUtente e dò il risultato
// deve essere dopo 30 secondi altrimenti non conosco i numeri scelti dall'utente
setTimeout(risultato, 30000);
