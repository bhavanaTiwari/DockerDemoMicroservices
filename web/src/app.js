const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(cors());
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "public", "index.html"));
});

module.exports = app;
