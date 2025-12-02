const db = require("mongoose");
const productSchema = db.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
  rating: String,
  category: [{ type: String }],
});

module.exports = db.model("Product", productSchema);
