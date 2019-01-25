// let wertDesFeldes = $('input').val();
// Das Ergebnis aus beiden ist das gleiche!
// let wertDesFeldes = $('input').attr('value');

// let wertDesFeldes = $('p').text();
// Das Ergebnis aus beiden ist das gleiche!
// let wertDesFeldes = $('p').html();

// let zahl1 = parseInt( $('.zahl1').val() );
// let zahl2 = parseInt( $('.zahl2').val() );
//
// $('.ergebnis1').val( eval(zahl1 + zahl2) );
//
//
// let zahl3 = parseInt( $('.zahl3').val() );
// let zahl4 = parseInt( $('.zahl4').val() );
//
// $('.ergebnis2').val( eval(zahl3 * zahl4) );
//
//
// let zahl5 = parseInt( $('.zahl5').val() );
// let zahl6 = parseInt( $('.zahl6').val() );
//
// $('.ergebnis3').val( eval(zahl5 - zahl6) );
//
//
// let zahl7 = parseInt( $('.zahl7').val() );
// let zahl8 = parseInt( $('.zahl8').val() );
//
// $('.ergebnis4').val( eval(zahl7 / zahl8) );


$('.number-btn').click(function() {
  var current = $(this);
  $('.ergebnis').val( current.val() );

});

$('.back-btn').click(function() {
  var aktuelleErgebnis = $('.ergebnis').val();
  aktuelleErgebnis = aktuelleErgebnis.substr(0, aktuelleErgebnis.length-1);
  $('.ergebnis').val(aktuelleErgebnis);
});
