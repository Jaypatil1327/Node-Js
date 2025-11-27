const cloudinary = require("../config/cloudinaryConfig");
const uploadImg = require("../helper/cloudinary-helper");
const Image = require("../model/image");
const fs = require("fs");
const index = 0;
async function deleteFile(path) {
  console.log(path);
  try {
    fs.unlink(path, (err) => {
      if (err) throw new Error(err.message);
      console.log("file deleted successfully");
    });
  } catch (e) {
    console.log(e.message, "error");
  }
}

const imageUpload = async (req, res) => {
  try {
    if (req.file) {
      const url = req.file.path;
      // upload image in cloudinary
      const result = await uploadImg(url);
      // delete image after uploaded to disk
      await deleteFile(url);
      // save in database
      const newlyUploadedImage = await Image.create({
        ...result,
        index: index,
        uploadedBy: req.userInfo.id,
      });
      index++;
      res.status(201).json({
        success: true,
        message: "image added successfully",
        data: newlyUploadedImage,
      });
    } else throw new Error("File is missing");
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const fetchImage = async (req, res) => {
  try {
    const totalElements = await Image.countDocuments();
    const sortOrder = (req.query.sortOrder || "asc") === "asc" ? 1 : -1;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const skip = (page - 1) * limit;

    if (page * limit > totalElements) throw new Error("no data to show");
    const getAllImage = await Image.find({})
      .sort({ index: sortOrder })
      .limit(limit)
      .skip(skip);

    res.status(200).json({
      success: true,
      message: "fetched image",
      total: totalElements,
      data: getAllImage,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteImage = async (req, res) => {
  try {
    const getCurrentImageIdToBeDeleted = req.params.id;
    const isCreatedByCurrentUser = await Image.find({
      publicId: getCurrentImageIdToBeDeleted,
      uploadedBy: req.userInfo.id,
    });
    if (isCreatedByCurrentUser) {
      await cloudinary.uploader.destroy(getCurrentImageIdToBeDeleted);
      await Image.findByIdAndDelete(isCreatedByCurrentUser._id);

      res.status(200).json({
        success: true,
        message: "image is deleted successfully",
      });
    } else throw new Error("your not authorized to delete this image");
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = { imageUpload, fetchImage, deleteImage };
