import { CatalogSectionAlbumsContext } from "@/servises/context";
import { useContext } from "react";
import CatalogAlbumTitle from "./catalogAlbumTitle";
import CatalogAlbumLogo from "./catalogAlbumLogo";
import CatalogAlbumImages from "./catalogAlbumImages";
import CreateAlbum from "./createAlbum";
import CatalogAlbumDelete from "./catalogAlbumDelete";

const CatalogSectionAlbums = ({ id, albumIds }) => {
  const [albums, setAlbums] = useContext(CatalogSectionAlbumsContext);
  const sectionAlbums = albums.filter((album) => albumIds.includes(album.id));

  sectionAlbums?.sort((album1, album2) => {
    const [date1, date2] = [album1.attributes.createdAt, album2.attributes.createdAt];
    return new Date(date1) - new Date(date2);
  });

  return (
    <div className="max-w-s mt-10 mx-auto">
      <CreateAlbum id={id} albumIds={albumIds} />

      {sectionAlbums?.map((album) => {
        const [id, title, logo, images] = [
          album.id,
          album.attributes.title,
          album.attributes.logo,
          album.attributes.images,
        ];

        return (
          <div key={id} className="p-2 mb-16 items-center border rounded-md border-current bg-darkMd">
            <CatalogAlbumTitle id={id} title={title} />
            <CatalogAlbumLogo id={id} logo={logo} />
            <CatalogAlbumImages id={id} images={images} />
            <CatalogAlbumDelete id={id} logo={logo} images={images} />
          </div>
        );
      })}
    </div>
  );
};

export default CatalogSectionAlbums;
