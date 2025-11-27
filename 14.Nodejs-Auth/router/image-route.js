const express = require("express");
const {
  imageUpload,
  fetchImage,
  deleteImage,
} = require("../controller/ImageController");
const authMiddleware = require("../middleware/homepage-middleware");
const verifyAdmin = require("../middleware/verify-admin");
const upload = require("../middleware/upload-file");
const ImageRouter = express.Router();

// upload image
ImageRouter.post(
  "/upload",
  authMiddleware,
  verifyAdmin,
  upload.single("image"),
  imageUpload
);

// fetch the image

ImageRouter.get("/get-image/:user", fetchImage);
ImageRouter.get("/get-image", fetchImage);
ImageRouter.delete("/delete/:id", authMiddleware, verifyAdmin, deleteImage);

module.exports = ImageRouter;
