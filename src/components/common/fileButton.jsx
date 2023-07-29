const FileButton = ({ onChange, logo }) => {
  return (
    <label
      htmlFor={logo}
      className="relative flex justify-center items-center box-border border rounded-sm text-white bg-sky-500 text-white w-20 h-5 mr-2 cursor-pointer"
    >
      Add+
      <input id={logo} type="file" className="hidden w-full h-full" onChange={(e) => onChange(e)} content="Add+" />
    </label>
  );
};

export default FileButton;
