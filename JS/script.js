const chilometri = prompt('Quanti chilometri vuoi percorrere?');
const età = prompt('Qual è la tua età?');
console.log(età);
console.log(chilometri);
let biglietto = 0.21 * chilometri;
console.log(biglietto);
if (età < 18) {
  biglietto = biglietto - 0.2 * biglietto;
}
if (età > 65) {
  biglietto = biglietto - 0.4 * biglietto;
}
console.log(biglietto);
biglietto = biglietto.toFixed(2);
document.getElementById('prezzo').innerHTML += biglietto + '€';