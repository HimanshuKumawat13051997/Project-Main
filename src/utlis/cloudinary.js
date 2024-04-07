import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload file on Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file uploaded successfully message
    fs.unlinkSync(localFilePath); //delete local copy of the image after it's been uploaded to Cloudinary
    console.log(response);
    return response;
  } catch (error) {
    // remove the locally saved temporary file as the upload operation got failed.
    fs.unlinkSync(localFilePath);
  }
};

export { uploadOnCloudinary };
