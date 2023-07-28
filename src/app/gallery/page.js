"use client";
import GalleryTable from "@/components/gallery/galleryTable";
import AddButton from "@/components/common/addButton";
import { useEffect, useState } from "react";
import { GalleryContext } from "@/servises/context";
import Parse from "@/servises/parse";

const getGallery = async () => {
  const gallery = new Parse.Query("gallery");
  try {
    const albums = await gallery.findAll();
    return albums;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const Gallery = () => {
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    const getAlbums = async () => {
      const context = await getGallery();
      setAlbums(context);
    };
    getAlbums();
  }, []);

  return (
    <GalleryContext.Provider value={[albums, setAlbums]}>
      <main>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-3xl my-10"> Gallery </h1>
          <AddButton isAlbum={true} />
        </div>
        <GalleryTable />
      </main>
    </GalleryContext.Provider>
  );
};
export default Gallery;
