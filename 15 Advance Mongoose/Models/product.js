const db = require("mongoose");
const productSchema = db.Schema({
  name: String,
  inStock: Boolean,
  price: Number,
  category: String,
  tags: [String],
});

module.exports = db.model("product", productSchema);
