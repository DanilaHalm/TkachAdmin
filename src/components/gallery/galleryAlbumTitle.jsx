import EditButton from "../common/editButton";
import { useState } from "react";
import Parse from "@/servises/parse";

const GalleryAlbumtTitle = ({ id, title }) => {
  const [inputText, setInputText] = useState("");
  const [titleText, setTitleText] = useState(title);

  const updateTitle = async () => {
    if (!inputText) return;
    const album = new Parse.Object("gallery");
    album.set("objectId", id);
    album.set("albumTitle", inputText);
    try {
      await album.save();
      setTitleText(inputText);
      return true;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  return (
    <div className="flex mb-2 border-b items-center">
      <h3 className="mr-auto font-bold text-xl">Title: {titleText}</h3>
      <input
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        className="h-5 w-24 border rounded-sm mx-2 text-dark p-1"
        value={inputText}
      />

      <EditButton onClick={() => updateTitle()} />
    </div>
  );
};

export default GalleryAlbumtTitle;
