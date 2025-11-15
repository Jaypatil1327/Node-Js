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

app.get("/", (req, res) => {
  res.send("Welcome to homePage");
});

app.get("/products", (req, res) => {
  res.json(products);
});

//dynamic routes

app.get("/products/:id", (req, res) => {
  const param = parseInt(req.params.id);
  const getProduct = products.filter((value) => value.id === param);

  if (getProduct) {
    res.json(getProduct);
  } else res.send("No data found");
});
