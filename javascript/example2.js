console.log('Dokument lädt');

$(document).ready(function() {

function timeout() {
  window.setTimeout(function() {
    $('button').removeClass('sending');
    $('button').text('sent');
    $('button').prop('disabled', false);
  }, 3000); //nach 3 Sek. ändert sich der Text
}

  $('button').click(function() {
    console.log('Bitte!');
    $(this).addClass('sending');
    $(this).text('sending');
    $(this).attr('disabled', true);
    timeout ();
  });


});
