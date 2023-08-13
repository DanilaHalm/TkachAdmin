import EditButton from "../common/editButton";
import { useState } from "react";
import updateGalleryTitle from "@/api/updateGalleryTtitle";

const GalleryAlbumtTitle = ({ id, title }) => {
  const [inputText, setInputText] = useState("");
  const [titleText, setTitleText] = useState(title);

  const handleUpdate = async () => {
    const titleUpdated = await updateGalleryTitle(id, inputText);
    if (titleUpdated) {
      setTitleText(inputText);
      setInputText("");
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

      <EditButton onClick={() => handleUpdate()} />
    </div>
  );
};

export default GalleryAlbumtTitle;
