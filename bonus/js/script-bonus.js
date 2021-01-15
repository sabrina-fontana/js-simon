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
    numeriComputer = arrayRandom.join(', ');
  }
}
console.log(numeriComputer);
$('.random-numbers').text(numeriComputer);

// INIZIO GIOCO al click su Fatto
$('.start-game .conferma').click(function() {
  $('.start-game').hide();
  $('.wait').addClass('active');
  setTimeout(function() {
    $('.wait').removeClass('active');
    $('.input-numbers').addClass('active');
  }, 3000);
});

// INPUT al click su Conferma raccolgo gli input dell'utente
$('.input-numbers .conferma').click(function() {
  $('.input-numbers').removeClass('active');
  for (var x = 1; x <= 5; x++) {
    arrayUtente.push(parseInt($('.input-' + x).val()));
    numeriUtente = arrayUtente.join(', ');
  }
  console.log(numeriUtente);
  $('.result').addClass('active');
  for (var x = 0; x < arrayRandom.length; x++) {
    if (arrayRandom[x] === arrayUtente[x]) {
      contatoreRisultato += 1;
    }
  }
  $('.result .title').text(contatoreRisultato);
  $('.user-numbers').append(numeriUtente);
  $('.computer-numbers').append(numeriComputer);

});
