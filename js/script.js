//Anni
var age = parseInt(prompt("Dimmi la tua età"));

console.log(age);
//Distanza
var km = parseInt(prompt("Dimmi quanti km devi fare"));

console.log(km);
//Prezzi
var ticketPrice = km * 0.21;

console.log(ticketPrice);

var discount20 = ticketPrice * 0.2;

var discount40 = ticketPrice * 0.4;
//Calcoli

if (age < 18) {
var ticketPrice = ticketPrice - discount20;
} else if (age > 65) {
var ticketPrice = ticketPrice - discount40;
} else {
var ticketPrice = ticketPrice;
}

//Stampa
document.getElementById("ticket").innerHTML = "Il prezzo del tuo biglietto è: " + ticketPrice.toFixed(2) + " euro";