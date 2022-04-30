import express from "express";
import routes from "./routes.js";
import cors from "cors";
const app = express();
app.use(cors());
const port = 5000;

app.get("/datum", routes.datum);
app.get("/prognoza", routes.prognoza);

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
