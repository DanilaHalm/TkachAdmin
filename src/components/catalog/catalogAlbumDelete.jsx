import DeleteButton from "../common/deleteButton";
import { useContext } from "react";
import { CatalogSectionAlbumsContext } from "@/servises/context";
import deleteCatalogAlbum from "@/api/deleteCatalogAlbum";

const CatalogAlbumDelete = ({ logo, images, id }) => {
  const [albums, setAlbums] = useContext(CatalogSectionAlbumsContext);

  const handleDelete = async () => {
    const deletedAlbum = await deleteCatalogAlbum(logo, images, id);
    if (deletedAlbum) {
      setAlbums(albums.filter((album) => album.id !== id));
    }
  };
  return (
    <div className="flex justify-end items-center">
      <DeleteButton onClick={() => handleDelete()} isAlbum={true} />
    </div>
  );
};

export default CatalogAlbumDelete;
