import Image from "next/image";
import DeleteButton from "../common/deleteButton";
import EditButton from "../common/editButton";
import FileLoader from "../common/fileLoader";
import CatalogAlbumAuthor from "./catalogAlbumAuthor";
import { useState } from "react";
// import updateGalleryImages from "@/api/updateGalleryImages";
// import deleteGalleryImage from "@/api/deleteGalleryImage";
// import deleteGalleryImages from "@/api/deleteGalleryImages";

const CatalogAlbumImages = ({ id, images }) => {
  const imageUrls = images.map((image) => image.url);
  const exImages = imageUrls || [];
  const [imgFiles, setImgFiles] = useState([]);
  const [localFileUrls, setLocalFileUrls] = useState([]);
  const [currentImages, setCurrentImages] = useState(exImages);

  const handleUpdate = async (imgFiles, id) => {
    // const newImages = await updateGalleryImages(imgFiles, id, currentImages);
    // if (newImages) {
    //   setCurrentImages([...currentImages, ...newImages]);
    //   setLocalFileUrls([]);
    //   setImgFiles([]);
    // }
  };

  const handleDelete = async (url) => {
    // const newImages = await deleteGalleryImage(url, id, currentImages);
    // setCurrentImages(newImages);
  };

  const handleDeleteAll = async (images) => {
    // const deleted = await deleteGalleryImages(id, images);
    // setCurrentImages([]);
  };

  return (
    <div className="">
      <div className="flex border-b mb-1 pb-2 items-center">
        <h3 className="mr-auto">Images</h3>
        <FileLoader
          id={id}
          isLogo={false}
          images={imageUrls}
          imgFiles={imgFiles}
          setImgFiles={setImgFiles}
          localFileUrls={localFileUrls}
          setLocalFileUrls={setLocalFileUrls}
        />
        <EditButton onClick={() => handleUpdate(imgFiles, id)} />
        <DeleteButton isAll={true} onClick={() => handleDeleteAll(currentImages)} />
      </div>
      {currentImages?.map((url, idx) => {
        const author = images.at(idx).author;
        return (
          <div key={url}>
            <div className="flex mb-1 pb-1 border-b items-center">
              <Image src={url} alt="albumimage" width="0" height="0" sizes="100vw" className="w-20 h-auto mr-auto " />
              <DeleteButton onClick={() => handleDelete(url)} />
            </div>
            <CatalogAlbumAuthor id={id} author={author} />
          </div>
        );
      })}
    </div>
  );
};

export default CatalogAlbumImages;
