import Image from "next/image";
import EditButton from "../common/editButton";
import FileButton from "../common/fileButton";
import FileLoader from "../common/fileLoader";
import { useState } from "react";

const GalleryAlbumLogo = ({ id, logo }) => {
  return (
    <div className="flex items-center mb-2 border-b pb-2">
      Logo:
      <Image src={logo} alt="logo" width="0" height="0" sizes="100vw" className="w-20 h-auto mr-auto" />
      <FileLoader logo={logo} />
      <EditButton />
    </div>
  );
};

export default GalleryAlbumLogo;
