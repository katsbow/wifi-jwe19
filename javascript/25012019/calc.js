// $('.number-btn').click(function() {
//   var current = $(this);
//   $('.ergebnis').val( current.val() );
//
// });
//
// $('.back-btn').click(function() {
//   var aktuelleErgebnis = $('.ergebnis').val();
//   aktuelleErgebnis = aktuelleErgebnis.substr(0, aktuelleErgebnis.length-1);
//   $('.ergebnis').val(aktuelleErgebnis);
// });


$('.insert').click(function() {
  var current = $(this);
  var newScreenVal = $('.screen').val()+current.val();
  $('.screen').val(newScreenVal);
});

$('.btn-back').click(function() {
  var aktuelleErgebnis = $('.screen').val();
  aktuelleErgebnis = aktuelleErgebnis.substr(0, aktuelleErgebnis.length-1);
  $('.screen').val(aktuelleErgebnis);
});

$('.btn-clean').click(function() {
  $('.screen').val('');
});

$('.btn-equal').click(function() {
  var result = $('.screen').val();
  result = eval(result);
  $('.screen').val(eval(result));
});
