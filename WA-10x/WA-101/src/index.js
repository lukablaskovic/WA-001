import express from "express";
import routes from "./routes.js";
const app = express();
const port = 3500;

app.get("/datum", routes.datum);
app.get("/prognoza", routes.prognoza);

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
