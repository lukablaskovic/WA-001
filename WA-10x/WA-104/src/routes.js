let students = [
  {
    ime: "Mirko",
    prezime: "Mirkić",
    JMBAG: "03036857488",
    godina_studija: "2",
  },
  {
    ime: "Slavko",
    prezime: "Slaviša",
    JMBAG: "03035553124",
    godina_studija: "4",
  },
  {
    ime: "Petar",
    prezime: "Perić",
    JMBAG: "03030055333",
    godina_studija: "1",
  },
  {
    ime: "Sven",
    prezime: "Fenić",
    JMBAG: "03034455496",
    godina_studija: "2",
  },
  {
    ime: "Luka",
    prezime: "Perko",
    JMBAG: "03036395824",
    godina_studija: "3",
  },
];

let studenti = (req, res) => res.json(students);
let first = (req, res) => res.json(students[0]);
let last = (req, res) => res.json(students[students.length - 1]);
export default { studenti, first, last };
