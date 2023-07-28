import CommonButton from "./commonButton";

const DeleteButton = ({ onClick, isAll }) => {
  return <CommonButton className="bg-pink" content={isAll ? "Delete all" : "Delete"} onClick={onClick} />;
};

export default DeleteButton;
