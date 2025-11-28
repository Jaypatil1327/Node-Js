const express = require("express");
const {
  getProductStats,
  insertData,
  sortedData,
} = require("../controller/product");
const productRouter = express.Router();

productRouter.post("/insert", insertData);
productRouter.get("/sort", sortedData);
productRouter.get("/stats", getProductStats);

module.exports = productRouter;
