const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
app.get("/healthcheck", (req, res) => {
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
