const author = require("../Models/author");
const book = require("../Models/book");

const createAuthor = async (req, res) => {
  try {
    const newlyCreatedAuthor = await author.create(req.body);
    res.status(201).json({
      success: true,
      result: newlyCreatedAuthor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      result: null,
    });
  }
};
const createBook = async (req, res) => {
  try {
    const newlyCreatedBook = await book.create(req.body);
    res.status(201).json({
      success: true,
      result: newlyCreatedBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      result: null,
    });
  }
};

const getInfo = async (req, res) => {
  try {
    const newInfo = await book.findById(req.params.id).populate("author");
    console.log(newInfo);
    res.status(201).json({
      success: true,
      result: newInfo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      result: null,
    });
  }
};

module.exports = { createAuthor, createBook, getInfo };
