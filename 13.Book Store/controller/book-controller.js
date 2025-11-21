const { json } = require("express");
const Model = require("../models/book");
const { Children } = require("react");

const getAllBooks = async (req, res) => {
  try {
    const listOFBooks = await Model.find({});
    res.status(201).json({
      success: true,
      message: "data fetched successfully",
      data: listOFBooks,
    });
  } catch (e) {
    res.status(404).json({
      success: true,
      message: "" + e.message,
    });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const id = req.params.id;
    const fetchById = await Model.findById(id);
    if (fetchById) {
      res.status(201).json({
        success: true,
        message: "fetch by id",
        data: fetchById,
      });
    } else throw new Error("no element found");
  } catch (e) {
    res.status(404).json({
      success: false,
      message: "" + e.message,
    });
  }
};

const addBook = async (req, res) => {
  try {
    const newBook = req.body;
    const newlyCreatedBook = await Model.create(newBook);

    if (newlyCreatedBook) {
      res.status(201).json({
        success: true,
        message: "added successfully",
        data: newlyCreatedBook,
      });
    }
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const newEntry = req.body;
    const updateCopy = await Model.findByIdAndUpdate(
      id,
      { ...newEntry },
      { new: true }
    );
    if (updateBook) {
      res.status(201).json({
        success: true,
        message: "updated successfully",
        data: updateBook,
      });
    }
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteEntry = await Model.findByIdAndDelete(id);
    if (deleteEntry) {
      res.status(201).json({
        success: true,
        message: "deleted successfully",
      });
    } else {
      throw new Error("no id found / already deleted");
    }
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  addBook,
  updateBook,
  deleteBook,
};
