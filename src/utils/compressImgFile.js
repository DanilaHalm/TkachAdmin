import imageCompression from "browser-image-compression";

const compressImgFile = async (imgFile) => {
  const options = {
    maxSizeMB: 3,
    maxWidthOrHeight: 1440,
    useWebWorker: true,
  };
  try {
    const compressedFile = await imageCompression(imgFile, options);
    return compressedFile;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default compressImgFile;
