const db = require("mongoose");

const BookSchema = db.Schema({
  name: String,
  author: {
    type: db.Schema.Types.ObjectId,
    ref: "Author",
  },
});

module.exports = db.model("book", BookSchema);
