const database = require("./Database");
const express = require("express");
const productRouter = require("./routes/product-routes");
const servicesRouter = require("./routes/bookAuthorRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());
database();

app.listen(process.env.PORT, () => {
  console.log("app in running at port :", process.env.PORT);
});

app.use("/api/product", productRouter);
app.use("/api/services", servicesRouter);
