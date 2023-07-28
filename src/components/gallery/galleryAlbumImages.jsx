import Image from "next/image";
import DeleteButton from "../common/deleteButton";
import FileButton from "../common/fileButton";

const GalleryAlbumImages = ({ id, images }) => {
  return (
    <div className="">
      <div className="flex border-b mb-1 pb-2">
        <h3 className="mr-auto">Images</h3>
        <FileButton />
        <DeleteButton isAll={true} />
      </div>
      {images.map((url) => {
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
