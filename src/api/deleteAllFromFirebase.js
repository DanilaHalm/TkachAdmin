import deleteFromFirebase from "./deleteFromFirebase";

const deleteAllFromFirebase = async (images) => {
  const promises = images.map((url) => {
    deleteFromFirebase(url);
  });

  try {
    const deleted = await Promise.all(promises);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default deleteAllFromFirebase;
