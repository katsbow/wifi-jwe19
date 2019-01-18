// Definition von Variablen
var apples = 5;
var nuts = 17;
var lemons = 9;

/* mögliche Schreibweise
var apples = 5,
    nuts = 17,
    lemons = 9;
*/

console.log(apples, nuts, lemons);

console.log('Das Ergebnis ist ' + apples * nuts);

var inputTag = '<input type="email">';

console.log('inputTag');
console.log('<input type="email" onclick="this.style.backgroundColor=\"black\"">');
console.log(inputTag + inputTag + inputTag);

// Array (eindimensional)

var woche = [
  'Montag',
  'Dienstag',
  'Mittwoch',
  'Donnerstag',
  'Freitag'
];

/* andere Schreibweise

var langeWoche = new Array('Montag','Dienstag','Mittwoch','Donnerstag','Freitag');
*/

var wochenende = new Array('Samstag','Sonntag');

/* Zählen beginnt immer bei 0; der in Klammern stehende Wert bezieht sich auf
die Stelle der Variable */
console.log(woche[4]);

// length summiert die Anzahl der gegebenen Variablen.
console.log('Die Woche hat ' + woche.length + ' Tage.');

if(typeof woche[5] == 'undefined') {
  console.log('Dieser Tag entfällt diese Woche.');
} else {
  console.log('Heute ist ' + woche[10] + '.');
}

console.log('Heute ist ' + woche[4] + '.')

// Object mit Integer

var person = {
  alter: 31,
  groesse: 180,
  anrede: 'Herr',
  vorname: 'Manuel',
  nachname: 'Obermoser',
};

console.log('Sehr geehrter ' + person.anrede + ' ' + person.nachname);

// Mit Funktion habe ich die Möglichkeit, Variablen oder andere Datentypen zu manipulieren oder auszulesen.
// z.B. Formulare - sind alle Felder korrekt ausgefüllt?

var tier = function() {
  return 'Käfer';
};

console.log(tier());

var tier = function(vieh) {
  return 'Schöner ' + vieh;
};

console.log(tier('Vogel'));

var wieIstDeinName = function(person) {
  return person.vorname;
};

console.log(wieIstDeinName(person));

// OPERATOREN
// In if prüfen wir, ob etwas richtig oder falsch ist

// BSP1
var himmel = 'schwarz';

if(himmel == 'blau'){
  console.log('wirklich?');

} else if(himmel == 'schwarz') {
  console.log('Ist es Nacht?');
}

//BSP2
var note = '3';

if(note == 1){
  console.log('WOW');

} else if(note == '3') {
  console.log('OK');
}

//BSP3
var tomate = 5.0;
var melone = 23.5;

if( tomate > melone ) {
  console.log('wo? glaub ich nicht');
} else {
  console.log('genau');
}

//BSP4 = Rufzeichen gleich Nicht
if( !(tomate > melone) ) {
  console.log('wo? glaub ich nicht');
} else {
  console.log('genau');
}

//BSP5 eines des beiden Statements stimmt#
if( tomate == 7 || melone == 23.5 ) {
  console.log('true');
} else {
  console.log('false');
}

//BSP6 beide Statements stimmen
if( tomate == 5.0 && melone == 22.5 ) {
  console.log('true');
} else {
  console.log('false');
}

if(melone == "23.5") {
  console.log('true');
} else if(melone = "7") {
  console.log('true');
} else {
  console.log('false');
}

// andere Schreibweise
//case = fall = bedingung
/*
switch ( melone ) {
  case "23.5":
    console.log(true);
    break;
  case "7":
    console.log(true);
    break;
  default:
    console.log(false);
} */

// LOOP

for(var i = 0; i < 10; i++ /*+=2 --> wird immer um die zweite Zahl geloopt*/) {
  console.log('Prefix: ' + i);
}

/*
var jetzt = new Date();
jetzt = jetzt.getTime();
console.log(jetzt);

while(jetzt > 154783552100) {
  console.log('zu spät');
} */
