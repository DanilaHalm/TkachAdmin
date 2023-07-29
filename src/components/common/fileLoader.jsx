import FileButton from "./fileButton";
import Image from "next/image";

const FileLoader = ({ logo, setImgFile, localFileUrl, setLocalFileUrl }) => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const localeUrl = window.URL.createObjectURL(file);
    setLocalFileUrl(localeUrl);
    setImgFile(file);
  };

  return (
    <div className="flex justify-center items-center">
      {localFileUrl && (
        <Image
          key={localFileUrl}
          src={localFileUrl}
          alt="img"
          width="0"
          height="0"
          sizes="100vw"
          className="w-10 h-auto mr-1"
        />
      )}
      <FileButton onChange={handleChange} logo={logo} />
    </div>
  );
};

export default FileLoader;
