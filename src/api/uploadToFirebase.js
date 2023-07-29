import firebaseApp from "@/servises/firebase";
import { getStorage, ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import compressImgFile from "@/utils/compressImgFile";

const uploadToFirebase = async (imgFiles, id) => {
  const storage = getStorage(firebaseApp, "gs://testproject-91c17.appspot.com/");

  const compressedFiles = await compressImgFile(imgFiles);

  const dataToUpload = compressedFiles.map((compressedFile) => {
    const imageref = ref(storage, `/tkach/gallery/${id}_${compressedFile.name}`);
    return {
      file: compressedFile,
      imageref: imageref,
    };
  });

  try {
    const uploadPromises = dataToUpload.map((data) => {
      const res = uploadBytes(data.imageref, data.file);
      return res;
    });
    const newImages = await Promise.all(uploadPromises);

    const urlPromises = dataToUpload.map(async (data) => {
      const imgUrl = await getDownloadURL(data.imageref);

      return imgUrl;
    });
    const imgUrls = await Promise.all(urlPromises);
    return imgUrls;
  } catch (error) {
    console.error(error);
  }
};

export default uploadToFirebase;
