const express = require("express");
const routes = require("./routes");
const db = require("./db");

const app = express();

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

db.sync({force:false}).then(() =>
  app.listen(3000, () => console.log("Listening on PORT 3000"))
);
