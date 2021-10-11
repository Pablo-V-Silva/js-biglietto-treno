const chilometers = parseInt(prompt("Quanti chilometri intende percorrere?"));

const kmCost = 0.21;
let finalKmCost = (chilometers * kmCost);
console.log("Costo per km percorso " + finalKmCost + " €");

const userAge = parseInt(prompt("Quanti anni ha il passeggero?"));
var minorenniDiscount = (finalKmCost / 100) * 80;
var vecchiDiscount = (finalKmCost / 100) * 60;

var standardPrice = finalKmCost.toFixed(2);
var discYoungPrice = minorenniDiscount.toFixed(2);
var discOldPrice = vecchiDiscount.toFixed(2)

if (userAge < 18) {
  console.log("il tuo prezzo finale è " + discYoungPrice + " €");
  document.getElementById("price_ticket").innerHTML = ("Dovrai pagare " + discYoungPrice + " €")
} else if (userAge > 65) {
  console.log("il tuo prezzo finale è " + discOldPrice + " €");
  document.getElementById("price_ticket").innerHTML = ("Dovrai pagare " + discOldPrice + " €")
} else {
  console.log("il tuo prezzo finale è " + standardPrice + " €");
  document.getElementById("price_ticket").innerHTML = ("Dovrai pagare " + standardPrice + " €")
}
