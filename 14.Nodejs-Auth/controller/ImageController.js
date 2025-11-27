const uploadImg = require("../helper/cloudinary-helper");
const Image = require("../model/image");
const fs = require("fs");

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
        uploadedBy: req.userInfo.id,
      });

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

module.exports = imageUpload;
