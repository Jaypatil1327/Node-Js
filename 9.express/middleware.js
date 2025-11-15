const express = require("express");

const products = [
  { id: 1, name: "keyboard" },
  { id: 2, name: "mouse" },
  { id: 3, name: "monitor" },
  { id: 4, name: "cpu" },
];

// create app
const app = express();

app.listen(8000, () => {
  console.log("server is running");
});

const customMiddleware = (req, res, next) => {
  console.log("It will run every time");
  const date = new Date().toISOString();

  const url = req.url;
  console.log(url);
  console.log(date);

  next();
};

app.use(customMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to homePage");
});

app.get("/:id", (req, res) => {
  res.json(products);
});
