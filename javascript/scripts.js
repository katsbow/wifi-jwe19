/* Mehrzeiliger
Kommentar
*/

// Öffne Dialogfenster mit "Mein erster Alert" als text
alert('Mein erster ALERT');

// erstellen einer Variable mit einem text
var consolenTest = 'Hallo Christoph';

// ausgeben der Variable
console.log(consolenTest);

// überschreiben der Variable mit neuem Inhalt
consolenTest = 'Ciao Kakao';

// ausgeben des neuen Inhalts
console.log(consolenTest);

if(consolenTest === 'Ciao Kakao') {
  alert('Ciao');
}

var externalLink = $('a[href^="http://"], a[href^="https://"]');

if(externalLink.length > 0) {
  externalLink.attr('target', '_blank');
}
