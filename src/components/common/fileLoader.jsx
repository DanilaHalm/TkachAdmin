import FileButton from "./fileButton";
import Image from "next/image";
import { useState } from "react";

const FileLoader = ({ logo }) => {
  const [url, setUrl] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const localeUrl = window.URL.createObjectURL(file);
    setUrl(localeUrl);
  };

  return (
    <div className="flex justify-center items-center">
      {url && <Image key={url} src={url} alt="img" width="0" height="0" sizes="100vw" className="w-10 h-auto mr-1" />}
      <FileButton onChange={handleChange} logo={logo} />
    </div>
  );
};

export default FileLoader;
