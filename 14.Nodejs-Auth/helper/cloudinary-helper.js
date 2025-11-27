const cloudinary = require("../config/cloudinaryConfig");

const uploadImg = async (filename) => {
  try {
    const { public_id, secure_url } = await cloudinary.uploader.upload(
      filename
    );
    return { image: secure_url, publicId: public_id };
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = uploadImg;
