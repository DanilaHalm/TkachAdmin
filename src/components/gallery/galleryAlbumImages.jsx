import Image from "next/image";
import DeleteButton from "../common/deleteButton";
import EditButton from "../common/editButton";
import FileLoader from "../common/fileLoader";
import { useState } from "react";
import updateGalleryImages from "@/api/updateGalleryImages";

const GalleryAlbumImages = ({ id, images }) => {
  const [imgFiles, setImgFiles] = useState([]);
  const [localFileUrls, setLocalFileUrls] = useState([]);
  const [currentImages, setCurrentImages] = useState(images);

  const handleUpdate = async (imgFiles, id) => {
    const newImages = await updateGalleryImages(imgFiles, id, currentImages);
    if (newImages) {
      setCurrentImages([...currentImages, ...newImages]);
      setLocalFileUrls([]);
    }
  };

  return (
    <div className="">
      <div className="flex border-b mb-1 pb-2 items-center">
        <h3 className="mr-auto">Images</h3>
        <FileLoader
          id={id}
          isLogo={false}
          images={images}
          imgFiles={imgFiles}
          setImgFiles={setImgFiles}
          localFileUrls={localFileUrls}
          setLocalFileUrls={setLocalFileUrls}
        />
        <EditButton onClick={() => handleUpdate(imgFiles, id)} />
        <DeleteButton isAll={true} />
      </div>
      {currentImages.map((url) => {
        return (
          <div className="flex mb-1 pb-1 border-b items-center" key={url}>
            <Image src={url} alt="albumimage" width="0" height="0" sizes="100vw" className="w-20 h-auto mr-auto " />
            <DeleteButton />
          </div>
        );
      })}
    </div>
  );
};

export default GalleryAlbumImages;
