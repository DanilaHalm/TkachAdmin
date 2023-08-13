import DeleteButton from "../common/deleteButton";
import { useContext } from "react";
import { GalleryContext } from "@/servises/context";
import deleteGalleryAlbum from "@/api/deleteGalleryAlbum";

const GalleryAlbumDelete = ({ logo, images, id }) => {
  const [albums, setAlbums] = useContext(GalleryContext);

  const handleDelete = async () => {
    const deletedAlbum = await deleteGalleryAlbum(logo, images, id);
    if (deleteGalleryAlbum) {
      setAlbums(albums.filter((album) => album.id !== id));
    }
  };
  return (
    <div>
      <DeleteButton onClick={() => handleDelete()} />
    </div>
  );
};

export default GalleryAlbumDelete;
