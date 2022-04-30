import express from "express";
import routes from "./routes.js";

const app = express();
const port = 3600;

app.get("/dodaj", routes.dodaj);
app.get("/dohvati", routes.dohvati);

const staticMiddleware = express.static("public"); //direktorij sa statičkim datotekama

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
