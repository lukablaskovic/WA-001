import express from "express";
import routes from "./routes.js";

const app = express();
const port = 3600;

app.get("/dodaj", routes.dodaj);
let list = app.get("/dohvati", routes.dohvati);

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
