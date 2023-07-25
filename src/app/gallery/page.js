"use client";
import { useEffect, useState } from "react";
import { GalleryContext } from "@/servises/context";
// import Parse from "parse/dist/parse.min.js";
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
      <div>
        <h1> Gallery </h1>
        <div>
          {albums?.map((album) => {
            return <div key={album.id}>{album.attributes.albumTitle}</div>;
          })}
        </div>
      </div>
      ;
    </GalleryContext.Provider>
  );
};
export default Gallery;
