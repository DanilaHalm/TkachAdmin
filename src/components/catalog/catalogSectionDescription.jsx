import EditButton from "../common/editButton";
import { useState } from "react";
// import updateGalleryTitle from "@/api/updateGalleryTtitle";

const CatalogSectionDescription = ({ id, description }) => {
  const [inputText, setInputText] = useState("");
  const [descriptionText, setDescriptionText] = useState(description);

  const handleUpdate = async () => {
    // const titleUpdated = await updateGalleryTitle(id, inputText);
    // if (titleUpdated) {
    //   setDescriptionText(inputText);
    //   setInputText("");
    // }
  };

  return (
    <div className="flex mb-2 border-b items-center">
      <h3 className="mr-auto font-bold text-xl">Description: {descriptionText}</h3>
      <input
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        className="h-5 w-42 border rounded-sm mx-2 text-dark p-1"
        value={inputText}
      />

      <EditButton onClick={() => handleUpdate()} />
    </div>
  );
};

export default CatalogSectionDescription;
