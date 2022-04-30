let list = [];
function dodajRandomBroj(min, max, array) {
  let randomNumber = Math.round(Math.random() * (max - min) + min);
  array.push(randomNumber);
  console.log(`Dodan broj ${randomNumber}. Trenutna lista: ${list}`);
}
function ispis(array) {
  return array.join(" ").toString();
}
let dodaj = (req, res) => res.send(dodajRandomBroj(0, 100, list));
let dohvati = (req, res) => res.send(ispis(list));
export default { dodaj, dohvati };
