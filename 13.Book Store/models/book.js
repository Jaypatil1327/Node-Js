const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "book name is required"],
    trim: true,
    maxLength: [100, "book title must be less than 100 character"],
  },
  author: {
    type: String,
    required: [true, "book author is required"],
    trim: true,
  },
  year: {
    type: Number,
    required: [true, "publication year is required"],
    min: [1000, "year must be greater than 1000"],
    max: [new Date().getFullYear(), "the year cannot be in future"],
  },
  createdAt: {
    type: Number,
    default: Date.now,
  },
});

module.exports = mongoose.model("Book", bookSchema);
