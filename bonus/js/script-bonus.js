// FUNZIONI
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

// VARIABILI
var numeroRandom;
var arrayRandom = [];
var numeriComputer = [];
var numeroScelto;
var arrayUtente = [];
var numeriUtente = [];
var contatoreRisultato = 0;

// ***************************************
// ciclo per generare 5 numeri casuali (evitando doppioni)
while (arrayRandom.length < 5) {
  numeroRandom = randomNumber(1,50);
  if (arrayRandom.indexOf(numeroRandom) === -1) {
    arrayRandom.push(numeroRandom);
    // trasformo l'arrayRandom in una stringa
    numeriComputer = arrayRandom.join(', ');
  }
}
console.log(numeriComputer);
$('.random-numbers').text(numeriComputer);

// INIZIO GIOCO al click su Fatto
$('.start-game .conferma').click(function() {
  $('.start-game').hide();
  $('.wait').addClass('active');
  // ogni 1/4 di secondo aggiunto un '.' fino ad un massimo di tre
  setInterval(function() {
    if ($('.wait').text().length >= 3 ) {
        $('.wait').text('');
    } else {
      $('.wait').append('.');
    }
  }, 250);
  // dopo 3 secondi chiedo i numeri all'utente
  setTimeout(function() {
    $('.wait').removeClass('active');
    $('.input-numbers').addClass('active');
  }, 10000);
});

// INPUT al click su Conferma raccolgo gli input dell'utente e mostro il risultato
$('.input-numbers .conferma').click(function() {
  $('.input-numbers').removeClass('active');
  // pusho i valori dell'input nell'array Utente
  for (var x = 1; x <= 5; x++) {
    numeroScelto = parseInt($('.input-' + x).val());
    // se il numero scelto è numerico lo pusho nell'arrayUtente
    if (!isNaN(numeroScelto)) {
      arrayUtente.push(parseInt(numeroScelto));
    }
    // trasformo l'array Utente in una stringa
    numeriUtente = arrayUtente.join(', ');
  }
  console.log(numeriUtente);
  $('.result').addClass('active');
  // aggiorno il contatoreRisultato in base a quanti numeri uguali ha scritto l'utente
  for (var x = 0; x < arrayUtente.length; x++) {
    // if (arrayRandom[x] === arrayUtente[x]) {
    //   contatoreRisultato += 1;
    // }
    // se invece non mi importa che l'utente rispetti l'ordine dei numeri
    //devo usarlo comunque perchè se l'utente non inserisce un numero, quella posizione non ha indice nell'array Utente e gli indici degli altri numeri cambiano
    if (arrayRandom.includes(arrayUtente[x])) {
      contatoreRisultato += 1;
    }
  }

  $('.result .title').text(contatoreRisultato);
  $('.user-numbers').append(numeriUtente);
  $('.computer-numbers').append(numeriComputer);

});
