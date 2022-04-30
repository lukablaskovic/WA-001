import routes from ".routes";

const express = require("express");
const app = express();
const port = 3000;

app.get("/", routes.home);
app.get("/student", routes.student);

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
