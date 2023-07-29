import Image from "next/image";
import EditButton from "../common/editButton";
import FileLoader from "../common/fileLoader";
import { useState } from "react";
import updateGalleryLogo from "@/api/updateGalleryLogo";

const GalleryAlbumLogo = ({ id, logo }) => {
  const [imgFile, setImgFile] = useState(null);
  const [localFileUrl, setLocalFileUrl] = useState(null);
  const [currentLogo, setCurrentLogo] = useState(logo);

  const handleUpdate = async (imgFile, id) => {
    const newLogo = await updateGalleryLogo(imgFile, id);
    if (newLogo) {
      setCurrentLogo(newLogo);
      setLocalFileUrl(null);
    }
  };

  return (
    <div className="flex items-center mb-2 border-b pb-2">
      Logo:
      <Image src={currentLogo} alt="logo" width="0" height="0" sizes="100vw" className="w-20 h-auto mr-auto" />
      <FileLoader
        id={id}
        logo={logo}
        setImgFile={setImgFile}
        localFileUrl={localFileUrl}
        setLocalFileUrl={setLocalFileUrl}
      />
      <EditButton onClick={() => handleUpdate(imgFile, id)} />
    </div>
  );
};

export default GalleryAlbumLogo;
