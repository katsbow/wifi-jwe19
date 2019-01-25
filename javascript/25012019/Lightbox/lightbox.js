var $lightboxWrapper = $('.lightbox-wrapper');

for(var i=1; i<=23;i++) {

  // Dateierweiterung
  var src = '.jpg';

  if(i.toString().length == 1){
    // Wenn der Index i 1 Stelle hat
    src = '00' + i + src;

  } else if (i.toString().length == 2){
    // Wenn der Index i 2 Stellen hat
    src = '0' + i + src;

  } else {
    // Wenn der Index i 3 Stellen hat
    src = i + src;
  }

  // Erstellen des HTML Tags
  var htmlTag = '<img src="img/thumbnails/' + src + '" class="lightbox-image" data-fullscreen="img/fullscreen/' + src + '">';

  console.log(htmlTag);
  $lightboxWrapper.append(htmlTag);

}

$('.lightbox-image').click(function() {

  // Das richtige Bild ermitteln
  var currentClickedImage = $(this);
  var imageTag = '<img src="' + currentClickedImage.attr('data-fullscreen') + '" alt="" >';
  $('.modal .modal-body').html(imageTag);
  $('.modal').modal('show');

  // Bild wird hier in einen im HTML Markup befindlichen DIV-Container geladen
  // Anschließend wird der DIV-Container (Modal) eingeblendet

});

$('.modal').modal('show');
