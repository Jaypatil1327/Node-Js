const db = require("mongoose");

const AuthorSchema = db.Schema({
  name: String,
  bio: {
    type: String,
    required: true,
    maxLength: 100,
  },
});

module.exports = db.model("Author", AuthorSchema);
