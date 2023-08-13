import CommonButton from "./commonButton";

const DeleteButton = ({ onClick, isAll, isAlbum }) => {
  let content = "Delete";
  let className = "bg-pink mr-2";
  if (isAll) content = "Delete all";
  if (isAlbum) {
    content = "Delete album";
    className += " w-42";
  }
  return <CommonButton className={className} content={content} onClick={onClick} />;
};

export default DeleteButton;
