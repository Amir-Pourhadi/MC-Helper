require("module-alias/register");

const express = require("express");
const route = require("./routes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", route);

app.use("*", (req, res) => {
  res.status(404).send({ msg: "Page not found", status: 404 });
});

app.listen(PORT);
