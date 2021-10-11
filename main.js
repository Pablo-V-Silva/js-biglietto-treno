const chilometers = parseInt(prompt("Quanti chilometri intende percorrere?"));

const kmCost = 0.21;
let finalKmCost = (chilometers * kmCost);
console.log("Costo per km percorso " + finalKmCost + " €");

const userAge = parseInt(prompt("Quanti anni ha il passeggero?"));
let minorenniDiscount = (finalKmCost / 100) * 80;
let vecchiDiscount = (finalKmCost / 100) * 60;

if (userAge < 18) {
  console.log("il tuo prezzo finale è " + minorenniDiscount + " €");
} else if (userAge > 65) {
  console.log("il tuo prezzo finale è " + vecchiDiscount + " €");
} else {
  console.log("il tuo prezzo finale è " + finalKmCost + " €");
}

var n = finalKmCost.toFixed(2);
var n = minorenniDiscount.toFixed(2);
var n = vecchiDiscount.toFixed(2);