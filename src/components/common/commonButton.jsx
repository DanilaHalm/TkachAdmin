const CommonButton = ({ onClick, className, content }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} w-20 h-5 border border-white rounded-sm flex justify-center items-center`}
    >
      {content}
    </button>
  );
};

export default CommonButton;
