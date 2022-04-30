import express from "express";
import routes from "./routes.js";

const app = express();
const port = 4000;

app.get("/studenti", routes.studenti);
app.get("/studenti/first", routes.first);
app.get("/studenti/last", routes.last);

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
