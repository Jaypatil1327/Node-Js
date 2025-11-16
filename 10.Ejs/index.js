const express = require("express");
const path = require("path");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(8000, () => {
  console.log("server is listening");
});

app.get("/", async (req, res) => {
  const response = await fetch("https://dummyjson.com/products");
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    res.render("homepage", { data: data.products });
  } else {
    res.status(404);
  }
});

app.get("/about/:id", async (req, res) => {
  const param = parseInt(req.params.id);
  const response = await fetch(`https://dummyjson.com/products/${param}`);
  const product = await response.json();
  console.log(product);
  res.render("about.ejs", { product: product });
});
