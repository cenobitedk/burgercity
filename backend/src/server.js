const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

// data
const burgers = require("./data/burgers.json");

app.get("/healthcheck", (req, res) => {
  res.send("OK");
});

app.get("/search", (req, res) => {
  console.log("Search term: ", req.query.q);
  res.json(burgers);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
