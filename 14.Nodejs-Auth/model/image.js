const mongoose = require("mongoose");
const imageSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    publicId: {
      type: String,
      required: true,
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    index: Number,
  },
  { timestamp: true }
);

module.exports = mongoose.model("Image", imageSchema);
