import firebaseApp from "@/servises/firebase";
import { getStorage, ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import compressImgFile from "@/utils/compressImgFile";

const uploadToFirebase = async (imgFile, id) => {
  const storage = getStorage(firebaseApp, "gs://testproject-91c17.appspot.com/");
  const fileToUpload = await compressImgFile(imgFile);
  const imageref = ref(storage, `/tkach/gallery/${id}_${fileToUpload.name}`);
  try {
    const res = await uploadBytes(imageref, imgFile);
    const imgUrl = await getDownloadURL(imageref);
    console.log(imgUrl, typeof imgUrl);
    return imgUrl;
  } catch (error) {
    console.error(error);
  }
};

export default uploadToFirebase;
