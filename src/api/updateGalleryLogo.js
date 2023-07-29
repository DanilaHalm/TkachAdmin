import uploadToFirebase from "@/api/uploadToFirebase";
import Parse from "@/servises/parse";

const updateGalleryLogo = async (imgFile, id) => {
  const newLogoUrl = await uploadToFirebase(imgFile, id);
  const album = new Parse.Object("gallery");
  album.set("objectId", id);
  album.set("albumLogo", newLogoUrl);
  try {
    await album.save();
    return newLogoUrl;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default updateGalleryLogo;
