import { GalleryContext } from "@/servises/context";
import { useContext } from "react";
import GalleryAlbumTitle from "./galleryAlbumTitle";
import GalleryAlbumLogo from "./galleryAlbumLogo";
import GalleryAlbumImages from "./galleryAlbumImages";
import GalleryAlbumDelete from "./galleryAlbumDelete";

const GalleryTable = () => {
  const [albums, setAlbums] = useContext(GalleryContext);
  albums?.sort((album1, album2) => {
    const [date1, date2] = [album1.attributes.createdAt, album2.attributes.createdAt];
    return new Date(date1) - new Date(date2);
  });
  return (
    <div className="max-w-s mt-10 mx-auto">
      {albums?.map((album) => {
        const [id, title, logo, images] = [
          album.id,
          album.attributes.albumTitle,
          album.attributes.albumLogo,
          album.attributes.albumImages,
        ];

        return (
          <div key={id} className="p-2 mb-16 items-center border rounded-md border-current bg-darkHd">
            <GalleryAlbumTitle title={title} id={id} />
            <GalleryAlbumLogo logo={logo} id={id} />
            <GalleryAlbumImages images={images} id={id} />
            <GalleryAlbumDelete logo={logo} images={images} id={id} />
          </div>
        );
      })}
    </div>
  );
};

export default GalleryTable;
