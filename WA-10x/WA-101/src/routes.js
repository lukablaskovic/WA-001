import moment from "moment";

function currentTime() {
  let now = moment().format("DD.MM.YYYY HH:mm");
  return now;
}
let weather = ["sunčano", "kišovito", "oblačno"];
function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let datum = (req, res) => res.send(currentTime());
let prognoza = (req, res) => res.send(`Danas će biti ${random(weather)}.`);

export default { datum, prognoza }; // na kraju navodimo koje JS objekte treba exportat
