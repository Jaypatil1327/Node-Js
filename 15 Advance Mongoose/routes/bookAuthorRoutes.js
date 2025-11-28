const express = require("express");
const {
  getInfo,
  createAuthor,
  createBook,
} = require("../controller/books-author");
const servicesRouter = express.Router();

servicesRouter.get("/get/:id", getInfo);
servicesRouter.post("/createBook", createBook);
servicesRouter.post("/createAuthor", createAuthor);

module.exports = servicesRouter;
