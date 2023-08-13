import CommonButton from "./commonButton";

const DeleteButton = ({ onClick, isAll }) => {
  return <CommonButton className="bg-pink mr-2" content={isAll ? "Delete all" : "Delete"} onClick={onClick} />;
};

export default DeleteButton;
