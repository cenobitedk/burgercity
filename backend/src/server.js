const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

// data
const burgers = require("./data/burgers.json");
const reviews = require("./data/reviews.json");

app.get("/healthcheck", (req, res) => {
  res.send("OK");
});

app.get("/search", (req, res) => {
  console.log("Search term:", req.query.q);
  res.json(burgers);
});

app.get("/burgers", (req, res) => {
  res.json(burgers);
});

app.get("/burgers/:id", (req, res) => {
  console.log("Search burger:", req.params.id);

  const burger = burgers.find(({ id }) => id === req.params.id);

  if (burger) {
    res.json(burger);
  } else {
    res.send(204);
  }
});

app.get("/burgers/:id/reviews", (req, res) => {
  console.log("Search burger reviews:", req.params.id);

  const burgerReviews = reviews.find(({ id }) => id === req.params.id);

  if (burgerReviews) {
    res.json(burgerReviews);
  } else {
    res.send(204);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
